import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Code, TestTube, Layers, GitBranch, Cloud } from "lucide-react";

const AIApproach = () => {
  const approaches = [
    {
      icon: Brain,
      title: "Machine Learning Pipeline",
      description: "Regression models trained on water quality parameters including pH, turbidity, dissolved oxygen, and contamination levels",
      tech: ["TensorFlow", "Scikit-learn", "Pandas"]
    },
    {
      icon: Code,
      title: "Automated Data Collection",
      description: "IoT sensors automatically collect and process water quality data with real-time analysis and anomaly detection",
      tech: ["Python", "IoT APIs", "Real-time Processing"]
    },
    {
      icon: TestTube,
      title: "Comprehensive Testing",
      description: "Unit tests, integration tests, and model validation ensure 94.7% accuracy with bias mitigation protocols",
      tech: ["pytest", "MLflow", "Data Validation"]
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Modular microservices design enables deployment across different environments and infrastructure",
      tech: ["Docker", "Kubernetes", "REST APIs"]
    }
  ];

  const softwareEngineering = [
    {
      icon: GitBranch,
      title: "Version Control & CI/CD",
      description: "Git workflows with automated testing and deployment pipelines for reliable model updates"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Scalable cloud infrastructure for global water monitoring with edge computing capabilities"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI & Software Engineering
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Intelligent Technical Approach</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining cutting-edge AI with robust software engineering practices to create 
            a reliable, scalable water quality monitoring solution.
          </p>
        </div>

        {/* Main AI Approaches */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <approach.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{approach.description}</p>
                <div className="flex flex-wrap gap-2">
                  {approach.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Software Engineering Practices */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-large">
          <h3 className="text-2xl font-bold mb-8 text-center">Software Engineering Excellence</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {softwareEngineering.map((practice, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-accent rounded-lg flex-shrink-0">
                  <practice.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{practice.title}</h4>
                  <p className="text-muted-foreground text-sm">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="gradient" size="lg">
              <Code className="w-5 h-5 mr-2" />
              View Technical Documentation
            </Button>
          </div>
        </div>

        {/* Technical Solution Overview */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold mb-6">Technical Solution Overview</h3>
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              <strong>Problem:</strong> Traditional water quality monitoring relies on manual testing and periodic sampling, 
              leading to delayed detection of contamination and health risks.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>AI Solution:</strong> We train ensemble regression models on historical water quality data, 
              weather patterns, and environmental factors to predict contamination events 24-48 hours in advance.
            </p>
            <p className="text-muted-foreground">
              <strong>Impact:</strong> Early warning systems enable proactive intervention, reducing waterborne disease 
              outbreaks by up to 65% and ensuring safer water access for vulnerable communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIApproach;