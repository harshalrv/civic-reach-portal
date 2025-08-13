import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, CheckCircle } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "2.4M+",
      label: "Registered Citizens",
      description: "Active users on the platform"
    },
    {
      icon: CheckCircle,
      value: "5.8M+",
      label: "Applications Processed",
      description: "Successfully completed requests"
    },
    {
      icon: Clock,
      value: "2.3 mins",
      label: "Average Response Time",
      description: "Quick and efficient service"
    },
    {
      icon: TrendingUp,
      value: "98.7%",
      label: "Satisfaction Rate",
      description: "Citizen satisfaction score"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Millions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform serves millions of citizens daily, providing reliable and efficient government services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;