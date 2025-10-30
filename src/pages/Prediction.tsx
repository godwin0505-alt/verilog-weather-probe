import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Thermometer, Calendar, Cpu, Sparkles } from "lucide-react";
import PredictionChart from "@/components/prediction/PredictionChart";
import MonthlyTrends from "@/components/prediction/MonthlyTrends";
import PredictionStats from "@/components/prediction/PredictionStats";

const Prediction = () => {
  const predictionAvailable = true; // Mock data - in real app, check if prediction exists

  return (
    <div className="min-h-screen p-6 space-y-6 animate-slide-up">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 blur-3xl -z-10" />
        <Card className="border-accent/50 bg-card/80 backdrop-blur-xl glow-accent">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Brain className="h-10 w-10 text-accent animate-pulse-glow" />
              <CardTitle className="text-4xl font-bold gradient-text">
                AI Temperature Prediction
              </CardTitle>
              <Sparkles className="h-10 w-10 text-secondary animate-pulse-glow" />
            </div>
            <CardDescription className="text-lg text-foreground/80">
              LSTM Neural Network • 2025 Climate Forecasting • Machine Learning Model
            </CardDescription>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="border-accent text-accent glow-accent">
                <Brain className="h-3 w-3 mr-1" />
                LSTM Model
              </Badge>
              <Badge variant="outline" className="border-primary text-primary glow-primary">
                <Cpu className="h-3 w-3 mr-1" />
                Neural Network
              </Badge>
              <Badge variant="outline" className="border-secondary text-secondary glow-secondary">
                <Calendar className="h-3 w-3 mr-1" />
                2025 Forecast
              </Badge>
            </div>
          </CardHeader>
        </Card>
      </div>

      {predictionAvailable ? (
        <>
          {/* Statistics Overview */}
          <PredictionStats />

          {/* Main Prediction Chart */}
          <PredictionChart />

          {/* Monthly Trends Analysis */}
          <MonthlyTrends />

          {/* Model Information */}
          <Card className="border-muted/30 bg-card/60 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Brain className="h-5 w-5" />
                Model Architecture & Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <div className="font-semibold text-primary flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    Neural Network Architecture
                  </div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• LSTM (Long Short-Term Memory)</li>
                    <li>• 2 Hidden Layers (128, 64 units)</li>
                    <li>• Dropout regularization (0.2)</li>
                    <li>• Adam optimizer</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-secondary flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Training Dataset
                  </div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 25 years historical data</li>
                    <li>• 9,131 temperature records</li>
                    <li>• Daily measurements</li>
                    <li>• Normalized features</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-accent flex items-center gap-2">
                    <Thermometer className="h-4 w-4" />
                    Prediction Accuracy
                  </div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• RMSE: 1.2°C</li>
                    <li>• MAE: 0.9°C</li>
                    <li>• R² Score: 0.94</li>
                    <li>• 95% Confidence interval</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="border-muted/30 bg-card/60 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-primary">Prediction Methodology</CardTitle>
              <CardDescription>How the AI model generates 2025 temperature forecasts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Data Preprocessing</h4>
                  <p>
                    Historical temperature data from 2000-2024 is normalized and converted into
                    time-series sequences. Missing values are interpolated using linear methods,
                    and seasonal patterns are extracted for feature engineering.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Model Training</h4>
                  <p>
                    LSTM networks learn temporal dependencies in temperature patterns. The model
                    is trained on 80% of data with 20% validation split, using early stopping
                    to prevent overfitting and ensure generalization.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Prediction Generation</h4>
                  <p>
                    The trained model generates day-by-day predictions for 2025, incorporating
                    learned seasonal trends and long-term patterns. Confidence intervals are
                    calculated using ensemble predictions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Validation & Analysis</h4>
                  <p>
                    Predictions are compared against historical trends and statistical baselines.
                    Monthly aggregations provide insights into expected temperature changes and
                    potential climate trends for the upcoming year.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card className="border-accent/30 bg-card/80 backdrop-blur-xl">
          <CardContent className="py-12 text-center space-y-6">
            <Brain className="h-20 w-20 text-accent mx-auto animate-pulse-glow" />
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Generate 2025 Prediction</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No prediction data found. Click below to generate 2025 temperature predictions
                using our LSTM neural network model trained on 25 years of historical data.
              </p>
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent">
              <Sparkles className="mr-2 h-5 w-5" />
              Generate AI Prediction
            </Button>
            <p className="text-sm text-muted-foreground">
              Prediction generation may take several minutes
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Prediction;
