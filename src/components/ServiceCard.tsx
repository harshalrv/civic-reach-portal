import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText?: string;
  popular?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  buttonText = "Get Started",
  popular = false 
}: ServiceCardProps) => {
  return (
    <Card 
      className="relative group hover:shadow-lg transition-all duration-200 cursor-pointer"
      style={{ 
        backgroundColor: 'var(--service-card)',
        borderColor: 'var(--service-border)',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {popular && (
        <div className="absolute -top-2 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
          Popular
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
        >
          {buttonText}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;