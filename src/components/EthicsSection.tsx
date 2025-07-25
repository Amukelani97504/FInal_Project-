import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Leaf, Scale, Heart, Globe } from "lucide-react";

const EthicsSection = () => {
  const ethicalPrinciples = [
    {
      icon: Scale,
      title: "Bias Mitigation",
      description: "Comprehensive audit of training data to ensure fair representation across different geographic regions and socioeconomic communities",
      implementation: [
        "Multi-regional training datasets",
        "Algorithmic fairness testing",
        "Community-validated ground truth data"
      ]
    },
    {
      icon: Users,
      title: "Community Inclusion",
      description: "Engaging local communities in the development process and ensuring solutions work in low-resource settings",
      implementation: [
        "Participatory design workshops",
        "Local capacity building programs",
        "Offline-capable monitoring systems"
      ]
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Optimizing AI models for energy efficiency and minimizing environmental impact of monitoring infrastructure",
      implementation: [
        "Lightweight edge computing models",
        "Solar-powered sensor networks",
        "Efficient data transmission protocols"
      ]
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "Protecting sensitive community data while maintaining transparency in water quality information",
      implementation: [
        "End-to-end encryption",
        "Anonymized data aggregation",
        "Open-source monitoring tools"
      ]
    }
  ];

  const sustainabilityMetrics = [
    {
      metric: "Energy Efficiency",
      value: "89%",
      description: "Reduction in computational energy vs traditional models",
      icon: Leaf
    },
    {
      metric: "Community Reach",
      value: "1.2M+",
      description: "People served through inclusive design",
      icon: Users
    },
    {
      metric: "Local Deployment",
      value: "78%",
      description: "Solutions deployable in low-resource settings",
      icon: Globe
    },
    {
      metric: "Data Protection",
      value: "100%",
      description: "Community data encrypted and anonymized",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Ethical AI & Sustainability
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Responsible Innovation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ensuring our AI solutions are ethical, inclusive, and sustainable while 
            addressing the water crisis with respect for communities and the environment.
          </p>
        </div>

        {/* Ethical Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ethicalPrinciples.map((principle, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{principle.description}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm">Implementation:</h5>
                  <ul className="space-y-1">
                    {principle.implementation.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sustainability Metrics */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-large mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Sustainability Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sustainabilityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-white rounded-lg shadow-soft mb-4 inline-block">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm font-medium mb-1">{metric.metric}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection Questions */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold mb-6">Critical Reflection Questions</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-l-primary pl-6">
              <h4 className="font-semibold text-primary mb-2">SDG Alignment Assessment</h4>
              <p className="text-muted-foreground">
                How does AquaGuard AI specifically contribute to SDG 6 targets, and what measurable 
                outcomes demonstrate progress toward universal safe water access?
              </p>
            </div>
            <div className="border-l-4 border-l-accent pl-6">
              <h4 className="font-semibold text-accent mb-2">Ethical Risk Analysis</h4>
              <p className="text-muted-foreground">
                What potential biases could emerge in water quality predictions, and how do we ensure 
                equitable service delivery across different communities and geographic regions?
              </p>
            </div>
            <div className="border-l-4 border-l-success pl-6">
              <h4 className="font-semibold text-success mb-2">Long-term Sustainability</h4>
              <p className="text-muted-foreground">
                How do software engineering practices like documentation, testing, and modular design 
                ensure the solution remains maintainable and scalable for global deployment?
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Scale className="w-5 h-5 mr-2" />
              Download Ethics Framework
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;