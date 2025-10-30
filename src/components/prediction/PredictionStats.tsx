import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Thermometer, Calendar, AlertTriangle } from "lucide-react";

const PredictionStats = () => {
  const stats = {
    avgChange: "+1.2",
    hottestMonth: "July",
    hottestTemp: "28.5",
    coldestMonth: "January", 
    coldestTemp: "8.3",
    overallTrend: "Warming"
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-xl glow-primary hover:scale-105 transition-transform">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <Thermometer className="h-8 w-8 text-primary" />
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Avg Temperature Change</div>
            <div className="text-3xl font-bold text-primary">{stats.avgChange}°C</div>
            <div className="text-xs text-muted-foreground">vs 2024</div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5 backdrop-blur-xl hover:scale-105 transition-transform">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Hottest Month</div>
            <div className="text-2xl font-bold text-destructive">{stats.hottestMonth}</div>
            <div className="text-lg text-destructive">{stats.hottestTemp}°C</div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-vlsi-cold/30 bg-gradient-to-br from-vlsi-cold/10 to-vlsi-cold/5 backdrop-blur-xl hover:scale-105 transition-transform">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <Thermometer className="h-8 w-8 text-vlsi-cold" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Coldest Month</div>
            <div className="text-2xl font-bold text-vlsi-cold">{stats.coldestMonth}</div>
            <div className="text-lg text-vlsi-cold">{stats.coldestTemp}°C</div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-xl glow-secondary hover:scale-105 transition-transform">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="h-8 w-8 text-secondary" />
            <TrendingUp className="h-5 w-5 text-secondary" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Overall Trend</div>
            <div className="text-3xl font-bold text-secondary">{stats.overallTrend}</div>
            <div className="text-xs text-muted-foreground">2025 Forecast</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionStats;
