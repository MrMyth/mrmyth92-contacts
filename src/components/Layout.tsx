import React from "react";
import NavigationMenu from "@/components/NavigationMenu";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageNavigation from "@/components/PageNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationMenu />
      <main className="container px-4 py-8 mx-auto">
        <section id="hero-section" className="scroll-mt-20">
          <HeroSection />
        </section>
        {children}
        <PageNavigation />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
