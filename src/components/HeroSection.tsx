import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative py-16 px-4" style={{ background: 'var(--hero-bg)' }}>
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Your Gateway to
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-3">
            Government Services
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Access all government services in one place. Apply for permits, check application status, 
          manage documents, and stay connected with your local government.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search services..." 
              className="pl-10 h-12"
            />
          </div>
          <Button size="lg" className="w-full sm:w-auto">
            Search
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Available Services</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">24/7</div>
            <div className="text-sm text-muted-foreground">Online Access</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">System Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;