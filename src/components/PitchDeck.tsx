import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Brain, TrendingUp, Users, Globe, Shield, CheckCircle } from "lucide-react";

const PitchDeck = () => {
  const slides = [
    {
      id: 1,
      title: "The Global Water Crisis",
      subtitle: "A Critical Challenge for Humanity",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">The Problem</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  2.1 billion people lack safely managed drinking water
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  80% of wastewater flows back untreated
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  Water-related diseases kill 3.4 million annually
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-card to-muted p-6 rounded-xl border">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">UN SDG 6</h4>
              <p className="text-sm text-muted-foreground">
                "Ensure availability and sustainable management of water and sanitation for all"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "AquaGuard AI",
      subtitle: "Intelligent Water Quality Monitoring Solution",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full mb-4">
              <Brain className="w-5 h-5" />
              AI-Powered Solution
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-time Water Quality Prediction & Monitoring</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">94.7% Accuracy</h4>
              <p className="text-sm text-muted-foreground">ML model precision</p>
            </Card>
            <Card className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Global Reach</h4>
              <p className="text-sm text-muted-foreground">12 monitoring sites</p>
            </Card>
            <Card className="text-center p-4">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold mb-2">Real-time</h4>
              <p className="text-sm text-muted-foreground">24/7 monitoring</p>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Technical Excellence",
      subtitle: "AI for Software Engineering Applied",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">AI/ML Stack</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">TensorFlow</Badge>
                  <span className="text-sm">Deep learning models</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Scikit-learn</Badge>
                  <span className="text-sm">Data preprocessing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Python</Badge>
                  <span className="text-sm">Core ML pipeline</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Software Engineering</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Automated testing & CI/CD</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Version control (Git)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Modular architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Cloud deployment ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "SDG Impact & Ethics",
      subtitle: "Responsible Innovation for Global Good",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Direct SDG 6 Contribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Target 6.1 - Safe Water Access</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[78%]" />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Target 6.3 - Water Quality</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[65%]" />
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Ethical AI Principles</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Bias mitigation implemented</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Community inclusion focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Environmental sustainability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Data privacy protection</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Project Deliverables",
      subtitle: "Complete Assignment Submission",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Technical Deliverables</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="default">Complete</Badge>
                  <span className="text-sm">Interactive Web Dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">Complete</Badge>
                  <span className="text-sm">AI/ML Implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">Complete</Badge>
                  <span className="text-sm">Real-time Monitoring System</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">Complete</Badge>
                  <span className="text-sm">Documentation & Code</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Assignment Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">SDG alignment demonstrated</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">AI/SE concepts applied</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Ethical considerations addressed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Working prototype deployed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="gap-2">
              <ArrowRight className="w-4 h-4" />
              View Live Demo
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Assignment Presentation
          </Badge>
          <h1 className="text-5xl font-bold mb-6">AquaGuard AI Pitch Deck</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-Driven Solution for UN Sustainable Development Goal 6: Clean Water and Sanitation
          </p>
        </div>

        <div className="space-y-20">
          {slides.map((slide, index) => (
            <Card key={slide.id} className="shadow-xl border overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 text-center py-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Badge variant="secondary">{String(index + 1).padStart(2, '0')}</Badge>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-3xl mb-4">{slide.title}</CardTitle>
                <p className="text-lg text-muted-foreground">{slide.subtitle}</p>
              </CardHeader>
              <CardContent className="p-12">
                {slide.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PitchDeck;