import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PitchDeck from "@/components/PitchDeck";
import SDGSection from "@/components/SDGSection";
import AIApproach from "@/components/AIApproach";
import Dashboard from "@/components/Dashboard";
import EthicsSection from "@/components/EthicsSection";
import ProjectDeliverables from "@/components/ProjectDeliverables";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <section id="pitch">
        <PitchDeck />
      </section>
      <section id="sdg">
        <SDGSection />
      </section>
      <section id="approach">
        <AIApproach />
      </section>
      <section id="dashboard">
        <Dashboard />
      </section>
      <section id="ethics">
        <EthicsSection />
      </section>
      <section id="deliverables">
        <ProjectDeliverables />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
