import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Cpu, Zap } from "lucide-react";

interface StatusPanelProps {
  year1: string;
  year2: string;
  month: string;
}

const StatusPanel = ({ year1, year2, month }: StatusPanelProps) => {
  const verilogStatus = "Connected";
  const comparisonResult = Math.random() > 0.5 ? `${year2} hotter` : `${year1} hotter`;
  
  return (
    <Card className="border-secondary/30 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-xl">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-secondary/20 border border-secondary/50 glow-secondary animate-pulse-glow">
              <Cpu className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Verilog HDL Comparator</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span className="font-semibold text-secondary">{verilogStatus}</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block h-12 w-px bg-border" />
          
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/50 glow-primary">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Comparison Result</div>
              <div className="font-semibold text-foreground">{comparisonResult}</div>
            </div>
          </div>
          
          <div className="hidden md:block h-12 w-px bg-border" />
          
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="outline" className="border-primary/50">
              {year1}
            </Badge>
            <span className="text-muted-foreground">vs</span>
            <Badge variant="outline" className="border-secondary/50">
              {year2}
            </Badge>
            <span className="text-muted-foreground">•</span>
            <Badge variant="outline" className="border-accent/50">
              {month}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusPanel;
