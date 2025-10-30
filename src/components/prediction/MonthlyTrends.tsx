import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

const generateMonthlyTrends = () => {
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];
  
  return months.map((month) => {
    const temp2024 = +(18 + Math.random() * 10).toFixed(1);
    const temp2025 = +(18 + Math.random() * 10).toFixed(1);
    const change = +(temp2025 - temp2024).toFixed(1);
    const changePercent = +((change / temp2024) * 100).toFixed(1);
    
    return {
      month,
      temp2024,
      temp2025,
      change,
      changePercent,
      trending: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
    };
  });
};

const MonthlyTrends = () => {
  const trends = generateMonthlyTrends();
  
  return (
    <Card className="border-secondary/30 bg-card/80 backdrop-blur-xl circuit-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-secondary">
          <TrendingUp className="h-5 w-5" />
          Monthly Trend Analysis
        </CardTitle>
        <CardDescription>
          Detailed month-by-month temperature predictions for 2025
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {trends.map((trend, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border/50"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-24 font-semibold text-foreground">{trend.month}</div>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">2024:</span>
                  <span className="font-medium">{trend.temp2024}°C</span>
                </div>
                
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">2025:</span>
                  <span className="font-medium text-accent">{trend.temp2025}°C</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-1 ${
                  trend.trending === 'up' ? 'text-destructive' : 
                  trend.trending === 'down' ? 'text-vlsi-cold' : 
                  'text-muted-foreground'
                }`}>
                  {trend.trending === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : trend.trending === 'down' ? (
                    <TrendingDown className="h-4 w-4" />
                  ) : null}
                  <span className="font-semibold">
                    {trend.change > 0 ? '+' : ''}{trend.change}°C
                  </span>
                </div>
                
                <Badge 
                  variant="outline" 
                  className={
                    trend.trending === 'up' ? 'border-destructive/50 text-destructive' :
                    trend.trending === 'down' ? 'border-vlsi-cold/50 text-vlsi-cold' :
                    'border-muted-foreground/50'
                  }
                >
                  {trend.changePercent > 0 ? '+' : ''}{trend.changePercent}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyTrends;
