import { Button } from "@/components/ui/button";
import { 
  User, 
  Bell, 
  Search,
  Menu,
  Building2
} from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">CitizenPortal</h1>
              <p className="text-xs text-muted-foreground">Government Services</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Applications
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Documents
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Support
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;