import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Activity, TrendingUp, TrendingDown, Zap, Cpu, Radio } from "lucide-react";
import TemperatureChart from "@/components/dashboard/TemperatureChart";
import MonthlyComparison from "@/components/dashboard/MonthlyComparison";
import YearlyIndicator from "@/components/dashboard/YearlyIndicator";
import StatusPanel from "@/components/dashboard/StatusPanel";

const Dashboard = () => {
  const [year1, setYear1] = useState("2020");
  const [year2, setYear2] = useState("2024");
  const [month, setMonth] = useState("1");
  const [viewMode, setViewMode] = useState("daily");

  const years = Array.from({ length: 25 }, (_, i) => (2000 + i).toString());
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen p-6 space-y-6 animate-slide-up">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10" />
        <Card className="border-primary/50 bg-card/80 backdrop-blur-xl glow-primary">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Cpu className="h-10 w-10 text-primary animate-pulse-glow" />
              <CardTitle className="text-4xl font-bold gradient-text">
                HDL Temperature Analyzer
              </CardTitle>
              <Radio className="h-10 w-10 text-secondary animate-pulse-glow" />
            </div>
            <CardDescription className="text-lg text-foreground/80">
              Verilog-Powered Temperature Comparison System • VLSI Engineering Project
            </CardDescription>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="border-primary text-primary glow-primary">
                <Zap className="h-3 w-3 mr-1" />
                HDL Comparator Active
              </Badge>
              <Badge variant="outline" className="border-secondary text-secondary glow-secondary">
                <Activity className="h-3 w-3 mr-1" />
                25 Years Dataset
              </Badge>
              <Badge variant="outline" className="border-accent text-accent glow-accent">
                <Cpu className="h-3 w-3 mr-1" />
                Fixed-Point Arithmetic
              </Badge>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Control Panel */}
      <Card className="border-primary/30 bg-card/80 backdrop-blur-xl circuit-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Radio className="h-5 w-5" />
            Analysis Control Panel
          </CardTitle>
          <CardDescription>Configure comparison parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Year 1 Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Year 1
              </label>
              <Select value={year1} onValueChange={setYear1}>
                <SelectTrigger className="border-primary/50 bg-muted/50 hover:border-primary transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Year 2 Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                Year 2
              </label>
              <Select value={year2} onValueChange={setYear2}>
                <SelectTrigger className="border-primary/50 bg-muted/50 hover:border-primary transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Month Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-accent flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Month
              </label>
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="border-primary/50 bg-muted/50 hover:border-primary transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {months.map((monthName, idx) => (
                    <SelectItem key={idx} value={String(idx + 1)}>
                      {monthName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* View Mode Tabs */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-accent flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                View Mode
              </label>
              <Tabs value={viewMode} onValueChange={setViewMode} className="w-full">
                <TabsList className="grid grid-cols-3 bg-muted/50">
                  <TabsTrigger value="daily" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Daily
                  </TabsTrigger>
                  <TabsTrigger value="monthly" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="yearly" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Yearly
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Panel */}
      <StatusPanel year1={year1} year2={year2} month={months[parseInt(month) - 1]} />

      {/* Visualization Section */}
      <div className="grid gap-6">
        {viewMode === "daily" && (
          <TemperatureChart year1={year1} year2={year2} month={parseInt(month)} />
        )}
        {viewMode === "monthly" && (
          <MonthlyComparison year1={year1} year2={year2} />
        )}
        {viewMode === "yearly" && (
          <YearlyIndicator year1={year1} year2={year2} />
        )}
      </div>

      {/* Information Footer */}
      <Card className="border-muted/30 bg-card/60 backdrop-blur-xl">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
            <div className="space-y-1">
              <div className="font-semibold text-primary">Verilog HDL Implementation</div>
              <div>Fixed-point arithmetic comparator using Verilator</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-secondary">Dataset Coverage</div>
              <div>25 years of historical temperature data (2000-2024)</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-accent">VLSI Design</div>
              <div>Electronics & Communication Engineering Project</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
