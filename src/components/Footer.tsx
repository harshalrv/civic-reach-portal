import { Building2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-background" />
              <div>
                <h3 className="text-xl font-bold">CitizenPortal</h3>
                <p className="text-sm text-background/70">Government Services</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted gateway to all government services. Serving citizens with transparency, 
              efficiency, and accessibility.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                All Services
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                My Applications
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                Document Center
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                Payment Portal
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                Help Center
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                Contact Us
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                User Guide
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                System Status
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-background/70" />
                <span className="text-background/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-background/70" />
                <span className="text-background/70">support@citizenportal.gov</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-background/70 mt-0.5" />
                <span className="text-background/70">
                  123 Government Center<br />
                  City Hall, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 CitizenPortal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;