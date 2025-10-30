import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, Activity } from "lucide-react";

interface TemperatureChartProps {
  year1: string;
  year2: string;
  month: number;
}

// Mock data generation
const generateMockData = (year1: string, year2: string, month: number) => {
  const daysInMonth = new Date(parseInt(year1), month, 0).getDate();
  const data = [];
  
  for (let day = 1; day <= daysInMonth; day++) {
    const baseTemp = 20 + 10 * Math.sin((day / daysInMonth) * Math.PI);
    data.push({
      day: `${month}/${day}`,
      [year1]: +(baseTemp + Math.random() * 4 - 2).toFixed(1),
      [year2]: +(baseTemp + Math.random() * 4 - 1).toFixed(1),
      deviation: +((Math.random() * 3 - 1.5)).toFixed(1),
    });
  }
  
  return data;
};

const TemperatureChart = ({ year1, year2, month }: TemperatureChartProps) => {
  const data = generateMockData(year1, year2, month);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return (
    <Card className="border-primary/30 bg-card/80 backdrop-blur-xl circuit-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Activity className="h-5 w-5" />
              Daily Temperature Comparison
            </CardTitle>
            <CardDescription>
              {monthNames[month - 1]} {year1} vs {monthNames[month - 1]} {year2} • Day-to-Day Analysis
            </CardDescription>
          </div>
          <TrendingUp className="h-8 w-8 text-secondary animate-float" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="day" 
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
                border: '1px solid hsl(var(--primary))',
                borderRadius: '8px',
                boxShadow: 'var(--glow-primary)'
              }}
            />
            <Legend />
            <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
            <Line 
              type="monotone" 
              dataKey={year1} 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              activeDot={{ r: 6, className: 'glow-primary' }}
            />
            <Line 
              type="monotone" 
              dataKey={year2} 
              stroke="hsl(var(--secondary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--secondary))', r: 4 }}
              activeDot={{ r: 6, className: 'glow-secondary' }}
            />
            <Line 
              type="monotone" 
              dataKey="deviation" 
              stroke="hsl(var(--accent))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--accent))', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Avg {year1}</div>
            <div className="text-2xl font-bold text-primary">
              {(data.reduce((sum, d) => sum + d[year1], 0) / data.length).toFixed(1)}°C
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Avg {year2}</div>
            <div className="text-2xl font-bold text-secondary">
              {(data.reduce((sum, d) => sum + d[year2], 0) / data.length).toFixed(1)}°C
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Avg Deviation</div>
            <div className="text-2xl font-bold text-accent">
              {(data.reduce((sum, d) => sum + d.deviation, 0) / data.length).toFixed(1)}°C
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureChart;
