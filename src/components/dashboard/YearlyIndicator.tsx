import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, Thermometer } from "lucide-react";

interface YearlyIndicatorProps {
  year1: string;
  year2: string;
}

const YearlyIndicator = ({ year1, year2 }: YearlyIndicatorProps) => {
  // Mock yearly averages
  const avg1 = 18.5 + Math.random() * 3;
  const avg2 = 19.2 + Math.random() * 3;
  const difference = avg2 - avg1;
  const percentChange = (difference / avg1) * 100;
  
  const getTrendIcon = () => {
    if (Math.abs(difference) < 0.5) return <Minus className="h-6 w-6" />;
    return difference > 0 ? <TrendingUp className="h-6 w-6" /> : <TrendingDown className="h-6 w-6" />;
  };
  
  const getTrendColor = () => {
    if (Math.abs(difference) < 0.5) return "text-muted-foreground";
    return difference > 0 ? "text-destructive" : "text-vlsi-cold";
  };
  
  const getComparisonText = () => {
    if (Math.abs(difference) < 0.5) return "Similar Temperature";
    return difference > 0 ? `${year2} Hotter` : `${year1} Hotter`;
  };
  
  return (
    <Card className="border-accent/30 bg-card/80 backdrop-blur-xl circuit-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-accent">
          <Thermometer className="h-5 w-5" />
          Yearly Temperature Comparison
        </CardTitle>
        <CardDescription>
          Overall year-to-year temperature analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Year 1 */}
          <div className="space-y-4">
            <div className="text-center space-y-2 p-6 rounded-lg bg-primary/10 border-2 border-primary/50 glow-primary">
              <Badge variant="outline" className="border-primary text-primary">
                {year1}
              </Badge>
              <div className="text-6xl font-bold text-primary">
                {avg1.toFixed(1)}°C
              </div>
              <div className="text-sm text-muted-foreground">
                Annual Average Temperature
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground">Highest</div>
                <div className="text-lg font-bold text-destructive">{(avg1 + 12).toFixed(1)}°C</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground">Lowest</div>
                <div className="text-lg font-bold text-vlsi-cold">{(avg1 - 8).toFixed(1)}°C</div>
              </div>
            </div>
          </div>
          
          {/* Year 2 */}
          <div className="space-y-4">
            <div className="text-center space-y-2 p-6 rounded-lg bg-secondary/10 border-2 border-secondary/50 glow-secondary">
              <Badge variant="outline" className="border-secondary text-secondary">
                {year2}
              </Badge>
              <div className="text-6xl font-bold text-secondary">
                {avg2.toFixed(1)}°C
              </div>
              <div className="text-sm text-muted-foreground">
                Annual Average Temperature
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground">Highest</div>
                <div className="text-lg font-bold text-destructive">{(avg2 + 12).toFixed(1)}°C</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground">Lowest</div>
                <div className="text-lg font-bold text-vlsi-cold">{(avg2 - 8).toFixed(1)}°C</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comparison Summary */}
        <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/50">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className={`${getTrendColor()}`}>
              {getTrendIcon()}
            </div>
            <h3 className="text-2xl font-bold">
              {getComparisonText()}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-sm text-muted-foreground">Temperature Difference</div>
              <div className={`text-3xl font-bold ${getTrendColor()}`}>
                {difference > 0 ? '+' : ''}{difference.toFixed(2)}°C
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Percentage Change</div>
              <div className={`text-3xl font-bold ${getTrendColor()}`}>
                {percentChange > 0 ? '+' : ''}{percentChange.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YearlyIndicator;
