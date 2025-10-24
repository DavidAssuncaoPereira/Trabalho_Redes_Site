import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProjectDetails from "@/components/ProjectDetails";
import Documentation from "@/components/Documentation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ProjectDetails />
      <Documentation />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
