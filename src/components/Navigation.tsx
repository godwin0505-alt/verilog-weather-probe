import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, Cpu } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="text-xl font-bold gradient-text">VLSI TempAnalyzer</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
                className={location.pathname === "/" ? "glow-primary" : ""}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Historical Analysis
              </Button>
            </Link>
            
            <Link to="/prediction">
              <Button 
                variant={location.pathname === "/prediction" ? "default" : "ghost"}
                className={location.pathname === "/prediction" ? "glow-accent" : ""}
              >
                <Brain className="mr-2 h-4 w-4" />
                AI Prediction
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
