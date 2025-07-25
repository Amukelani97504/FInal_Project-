import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, FileText, Cloud, BarChart, CheckCircle, Calendar } from "lucide-react";

const ProjectDeliverables = () => {
  const deliverables = [
    {
      icon: Code,
      title: "Source Code & Documentation",
      description: "Complete Python codebase with Jupyter notebooks, unit tests, and comprehensive API documentation",
      status: "Completed",
      progress: 100,
      items: [
        "ML model training scripts (TensorFlow/Scikit-learn)",
        "Data preprocessing pipelines",
        "Unit and integration test suites",
        "API endpoints for real-time predictions",
        "Comprehensive code documentation"
      ]
    },
    {
      icon: Cloud,
      title: "Deployment & Infrastructure",
      description: "Cloud-deployed prototype with CI/CD pipeline and containerized microservices architecture",
      status: "In Progress",
      progress: 85,
      items: [
        "Docker containerization",
        "Kubernetes orchestration",
        "AWS/GCP cloud deployment",
        "CI/CD pipeline setup",
        "Load balancing and scaling"
      ]
    },
    {
      icon: FileText,
      title: "Technical Report",
      description: "Detailed analysis of SDG alignment, ethical considerations, and technical methodology",
      status: "In Progress", 
      progress: 75,
      items: [
        "SDG 6 impact assessment",
        "Bias mitigation strategies",
        "Model performance evaluation",
        "Scalability analysis",
        "Sustainability framework"
      ]
    },
    {
      icon: BarChart,
      title: "Monitoring Dashboard",
      description: "Interactive web application for real-time water quality monitoring and predictive analytics",
      status: "Completed",
      progress: 100,
      items: [
        "Real-time data visualization",
        "Predictive analytics interface",
        "Alert and notification system", 
        "Multi-site monitoring views",
        "Performance metrics tracking"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Research & Planning",
      duration: "Weeks 1-2",
      tasks: ["SDG analysis", "Problem definition", "Technology stack selection"],
      status: "completed"
    },
    {
      phase: "Development", 
      duration: "Weeks 3-6",
      tasks: ["Model development", "Data pipeline creation", "Testing framework"],
      status: "completed"
    },
    {
      phase: "Testing & Validation",
      duration: "Weeks 7-8", 
      tasks: ["Model validation", "Bias testing", "Performance optimization"],
      status: "current"
    },
    {
      phase: "Deployment",
      duration: "Weeks 9-10",
      tasks: ["Cloud deployment", "Monitoring setup", "Documentation"],
      status: "pending"
    },
    {
      phase: "Evaluation & Reporting",
      duration: "Weeks 11-12",
      tasks: ["Impact assessment", "Final report", "Presentation preparation"],
      status: "pending"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "success";
      case "In Progress": return "warning"; 
      case "Pending": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Project Deliverables & Timeline
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Comprehensive Project Outcomes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Well-documented, tested, and deployed AI solution with measurable impact 
            on SDG 6 goals and ethical AI implementation.
          </p>
        </div>

        {/* Deliverables */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {deliverables.map((deliverable, index) => (
            <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <deliverable.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{deliverable.title}</CardTitle>
                  </div>
                  <Badge variant={getStatusColor(deliverable.status) as any}>
                    {deliverable.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{deliverable.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span className="font-medium">{deliverable.progress}%</span>
                    </div>
                    <Progress value={deliverable.progress} className="h-2" />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm mb-2">Key Components:</h5>
                    <ul className="space-y-1">
                      {deliverable.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-large">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-primary" />
            Project Timeline & Milestones
          </h3>
          
          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                  phase.status === 'completed' ? 'bg-success' :
                  phase.status === 'current' ? 'bg-warning' : 'bg-muted'
                }`} />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">{phase.phase}</h4>
                    <Badge variant={
                      phase.status === 'completed' ? 'success' :
                      phase.status === 'current' ? 'warning' : 'secondary'
                    }>
                      {phase.duration}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {phase.tasks.join(" • ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 pt-6 border-t">
            <Button variant="gradient" size="lg">
              <FileText className="w-5 h-5 mr-2" />
              Download Project Documentation
            </Button>
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                AI/ML Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Cloud className="w-5 h-5 mr-2 text-accent" />
                Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "AWS", "Git", "CI/CD"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <BarChart className="w-5 h-5 mr-2 text-success" />
                Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["UN Data", "WHO", "Kaggle", "IoT Sensors", "Satellite Data"].map((source) => (
                  <Badge key={source} variant="secondary">{source}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectDeliverables;