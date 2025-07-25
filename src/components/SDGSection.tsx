import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp, Shield } from "lucide-react";

const SDGSection = () => {
  const sdgTargets = [
    {
      id: "6.1",
      title: "Universal Safe Water Access",
      description: "Achieve universal and equitable access to safe and affordable drinking water for all",
      progress: 78,
      impact: "Direct"
    },
    {
      id: "6.3", 
      title: "Water Quality Improvement",
      description: "Improve water quality by reducing pollution and minimizing hazardous chemicals",
      progress: 65,
      impact: "Direct"
    },
    {
      id: "6.B",
      title: "Community Participation", 
      description: "Support local communities in improving water and sanitation management",
      progress: 52,
      impact: "Indirect"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Target className="w-4 h-4 mr-2" />
            UN Sustainable Development Goal 6
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Aligning with Global Water Goals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AquaGuard AI directly contributes to achieving SDG 6 targets through intelligent 
            monitoring and predictive analytics for water quality management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sdgTargets.map((target) => (
            <Card key={target.id} className="shadow-medium hover:shadow-large transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={target.impact === "Direct" ? "default" : "secondary"}>
                    {target.impact} Impact
                  </Badge>
                  <span className="text-sm font-mono text-muted-foreground">SDG {target.id}</span>
                </div>
                <CardTitle className="text-lg">{target.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{target.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Global Progress</span>
                    <span className="font-medium">{target.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${target.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-large">
          <h3 className="text-2xl font-bold mb-8 text-center">Global Water Crisis by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">2.1B</div>
              <div className="text-sm text-muted-foreground">People lack safely managed drinking water</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-accent mb-1">80%</div>
              <div className="text-sm text-muted-foreground">Of wastewater flows back untreated</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success mb-1">94.7%</div>
              <div className="text-sm text-muted-foreground">AquaGuard AI accuracy rate</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-3xl font-bold text-warning mb-1">2030</div>
              <div className="text-sm text-muted-foreground">SDG target achievement year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;