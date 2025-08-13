import ServiceCard from "./ServiceCard";
import { 
  FileText, 
  CreditCard, 
  MapPin, 
  Users, 
  Shield, 
  Car,
  Home,
  Briefcase,
  Heart,
  GraduationCap,
  Gavel,
  TreePine
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Tax Services",
      description: "File tax returns, check refund status, and manage tax documents online.",
      icon: CreditCard,
      popular: true
    },
    {
      title: "Business Permits",
      description: "Apply for business licenses, permits, and regulatory approvals.",
      icon: Briefcase,
      popular: true
    },
    {
      title: "Property Services",
      description: "Property registration, valuation, and ownership transfer services.",
      icon: Home
    },
    {
      title: "Vehicle Registration",
      description: "Register vehicles, renew licenses, and manage vehicle documentation.",
      icon: Car
    },
    {
      title: "Health Services",
      description: "Access health records, book appointments, and manage medical documents.",
      icon: Heart
    },
    {
      title: "Education Services",
      description: "School enrollment, transcript requests, and educational certifications.",
      icon: GraduationCap
    },
    {
      title: "Legal Documents",
      description: "Birth certificates, marriage licenses, and other legal documentation.",
      icon: FileText
    },
    {
      title: "Public Safety",
      description: "Police reports, emergency services, and community safety programs.",
      icon: Shield
    },
    {
      title: "Social Services",
      description: "Welfare applications, unemployment benefits, and support programs.",
      icon: Users
    },
    {
      title: "Courts & Justice",
      description: "Court case lookup, fine payments, and legal proceeding information.",
      icon: Gavel
    },
    {
      title: "Environmental",
      description: "Environmental permits, waste management, and conservation programs.",
      icon: TreePine
    },
    {
      title: "Planning & Zoning",
      description: "Building permits, zoning applications, and urban planning services.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Government Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive catalog of government services. Everything you need is just a few clicks away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;