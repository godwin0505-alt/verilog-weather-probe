import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { Calendar } from "lucide-react";

interface MonthlyComparisonProps {
  year1: string;
  year2: string;
}

const generateMonthlyData = (year1: string, year2: string) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return months.map((month, idx) => {
    const seasonalBase = 15 + 12 * Math.sin((idx - 3) * Math.PI / 6);
    const temp1 = +(seasonalBase + Math.random() * 4 - 2).toFixed(1);
    const temp2 = +(seasonalBase + Math.random() * 4 - 1).toFixed(1);
    
    return {
      month,
      [year1]: temp1,
      [year2]: temp2,
      difference: +(temp2 - temp1).toFixed(1),
    };
  });
};

const MonthlyComparison = ({ year1, year2 }: MonthlyComparisonProps) => {
  const data = generateMonthlyData(year1, year2);
  
  return (
    <Card className="border-secondary/30 bg-card/80 backdrop-blur-xl circuit-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-secondary">
              <Calendar className="h-5 w-5" />
              Monthly Temperature Comparison
            </CardTitle>
            <CardDescription>
              {year1} vs {year2} • Month-to-Month Analysis
            </CardDescription>
          </div>
          <Calendar className="h-8 w-8 text-accent animate-float" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--foreground))"
              style={{ fontSize: '12px' }}
              label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--secondary))',
                borderRadius: '8px',
                boxShadow: 'var(--glow-secondary)'
              }}
            />
            <Legend />
            <Bar dataKey={year1} fill="hsl(var(--primary))" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} className="hover:opacity-80 transition-opacity" />
              ))}
            </Bar>
            <Bar dataKey={year2} fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} className="hover:opacity-80 transition-opacity" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="text-center space-y-1 p-4 rounded-lg bg-primary/10 border border-primary/30">
            <div className="text-sm text-muted-foreground">Average {year1}</div>
            <div className="text-2xl font-bold text-primary">
              {(data.reduce((sum, d) => sum + Number(d[year1]), 0) / 12).toFixed(1)}°C
            </div>
          </div>
          <div className="text-center space-y-1 p-4 rounded-lg bg-secondary/10 border border-secondary/30">
            <div className="text-sm text-muted-foreground">Average {year2}</div>
            <div className="text-2xl font-bold text-secondary">
              {(data.reduce((sum, d) => sum + Number(d[year2]), 0) / 12).toFixed(1)}°C
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyComparison;
