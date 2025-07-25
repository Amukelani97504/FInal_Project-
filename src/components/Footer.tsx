import { Button } from "@/components/ui/button";
import { Droplets, Heart, Globe, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">AquaGuard AI</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Advancing UN SDG 6 through intelligent water quality monitoring and 
              predictive analytics for safer, cleaner water access worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="font-semibold mb-4">Project</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#approach" className="hover:text-white transition-colors">AI Approach</a></li>
              <li><a href="#ethics" className="hover:text-white transition-colors">Ethics</a></li>
              <li><a href="#deliverables" className="hover:text-white transition-colors">Deliverables</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SDG Framework</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ethics Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-primary-foreground/80 mb-4 md:mb-0">
              <Heart className="w-4 h-4" />
              <span>Built for UN SDG 6: Clean Water and Sanitation</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Globe className="w-4 h-4" />
              <span>Contributing to a sustainable future</span>
            </div>
          </div>
          <div className="text-center text-primary-foreground/60 text-sm mt-4">
            © 2024 AquaGuard AI. Academic project demonstrating AI for Sustainable Development Goals.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;