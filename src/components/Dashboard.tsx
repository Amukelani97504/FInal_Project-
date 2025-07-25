import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Eye, TrendingUp, Droplets, Thermometer } from "lucide-react";

const Dashboard = () => {
  const monitoringSites = [
    {
      name: "Lake Victoria, Uganda",
      status: "Good",
      quality: 87,
      ph: 7.2,
      turbidity: 2.1,
      oxygen: 8.5,
      prediction: "Stable",
      riskLevel: "low"
    },
    {
      name: "Ganges River, India", 
      status: "Moderate",
      quality: 62,
      ph: 6.8,
      turbidity: 15.3,
      oxygen: 5.2,
      prediction: "Declining",
      riskLevel: "medium"
    },
    {
      name: "Amazon Basin, Brazil",
      status: "Excellent",
      quality: 95,
      ph: 7.4,
      turbidity: 0.8,
      oxygen: 9.1,
      prediction: "Improving",
      riskLevel: "low"
    },
    {
      name: "Mekong Delta, Vietnam",
      status: "Poor",
      quality: 34,
      ph: 5.9,
      turbidity: 28.7,
      oxygen: 3.8,
      prediction: "Critical",
      riskLevel: "high"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "success";
      case "Good": return "default";
      case "Moderate": return "warning";
      case "Poor": return "destructive";
      default: return "secondary";
    }
  };

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case "low": return CheckCircle;
      case "medium": return Eye;
      case "high": return AlertTriangle;
      default: return CheckCircle;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Real-Time Monitoring Dashboard
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Live Water Quality Analytics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered monitoring across global water sources with predictive analytics 
            and early warning systems for contamination events.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-soft border-l-4 border-l-success">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Monitors</p>
                  <p className="text-3xl font-bold text-success">247</p>
                </div>
                <Droplets className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Quality Score</p>
                  <p className="text-3xl font-bold text-primary">76.8</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-l-4 border-l-warning">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Alerts Today</p>
                  <p className="text-3xl font-bold text-warning">12</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Model Accuracy</p>
                  <p className="text-3xl font-bold text-accent">94.7%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monitoring Sites */}
        <div className="grid md:grid-cols-2 gap-8">
          {monitoringSites.map((site, index) => {
            const RiskIcon = getRiskIcon(site.riskLevel);
            return (
              <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{site.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getStatusColor(site.status) as any}>
                        {site.status}
                      </Badge>
                      <RiskIcon className={`w-5 h-5 ${
                        site.riskLevel === 'high' ? 'text-destructive' :
                        site.riskLevel === 'medium' ? 'text-warning' : 'text-success'
                      }`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Quality Score */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Quality Score</span>
                        <span className="font-medium">{site.quality}/100</span>
                      </div>
                      <Progress value={site.quality} className="h-2" />
                    </div>

                    {/* Parameters */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-primary">pH Level</div>
                        <div className="text-lg font-bold">{site.ph}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-primary">Turbidity</div>
                        <div className="text-lg font-bold">{site.turbidity}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-primary">O₂ Level</div>
                        <div className="text-lg font-bold">{site.oxygen}</div>
                      </div>
                    </div>

                    {/* Prediction */}
                    <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                      <span className="text-sm font-medium">AI Prediction:</span>
                      <Badge variant={site.prediction === "Critical" ? "destructive" : 
                                   site.prediction === "Declining" ? "warning" : "success"}>
                        {site.prediction}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            <Eye className="w-5 h-5 mr-2" />
            View Full Analytics Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;