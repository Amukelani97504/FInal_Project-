import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-water-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
          <Target className="w-4 h-4 mr-2" />
          UN SDG 6: Clean Water & Sanitation
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          AquaGuard
          <span className="block bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent">
            AI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          Intelligent Water Quality Monitoring powered by AI to ensure safe, 
          clean water access for communities worldwide
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="xl" variant="hero" className="group">
            <Droplets className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Explore Dashboard
          </Button>
          <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Zap className="w-5 h-5 mr-2" />
            View AI Models
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">94.7%</div>
            <div className="text-sm opacity-90">Model Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">2.1B</div>
            <div className="text-sm opacity-90">People Lacking Safe Water</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Real-time Monitoring</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-accent/30 rounded-full blur-sm animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-primary-glow/40 rounded-full blur-sm animate-pulse delay-500" />
    </section>
  );
};

export default Hero;