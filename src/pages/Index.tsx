
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WebDesignApproach from '../components/WebDesignApproach';
import BrandingApproach from '../components/BrandingApproach';
import ProjectShowcase from '../components/ProjectShowcase';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navbar />
      <Hero />
      <Services />
      <WebDesignApproach />
      <BrandingApproach />
      <ProjectShowcase />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
