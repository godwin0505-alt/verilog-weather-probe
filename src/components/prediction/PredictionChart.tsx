import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, Calendar } from "lucide-react";

const generatePredictionData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return months.map((month, idx) => {
    const seasonalBase = 15 + 12 * Math.sin((idx - 3) * Math.PI / 6);
    const historical = +(seasonalBase + Math.random() * 2 - 1).toFixed(1);
    const predicted = +(seasonalBase + Math.random() * 3).toFixed(1);
    
    return {
      month,
      historical2024: historical,
      predicted2025: predicted,
      upperBound: +(predicted + 2).toFixed(1),
      lowerBound: +(predicted - 2).toFixed(1),
    };
  });
};

const PredictionChart = () => {
  const data = generatePredictionData();
  
  return (
    <Card className="border-primary/30 bg-card/80 backdrop-blur-xl circuit-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              2025 Temperature Forecast
            </CardTitle>
            <CardDescription>
              AI-Predicted monthly temperatures with confidence intervals
            </CardDescription>
          </div>
          <Calendar className="h-8 w-8 text-accent animate-float" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
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
                border: '1px solid hsl(var(--primary))',
                borderRadius: '8px',
                boxShadow: 'var(--glow-primary)'
              }}
            />
            <Legend />
            
            {/* Confidence interval area */}
            <Area
              type="monotone"
              dataKey="upperBound"
              stackId="1"
              stroke="none"
              fill="hsl(var(--accent))"
              fillOpacity={0.1}
            />
            <Area
              type="monotone"
              dataKey="lowerBound"
              stackId="1"
              stroke="none"
              fill="hsl(var(--accent))"
              fillOpacity={0.1}
            />
            
            <Line 
              type="monotone" 
              dataKey="historical2024" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--muted-foreground))', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="predicted2025" 
              stroke="hsl(var(--accent))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--accent))', r: 5 }}
              activeDot={{ r: 7, className: 'glow-accent' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PredictionChart;
