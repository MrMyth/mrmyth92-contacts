import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import DonationSection from "@/components/sections/DonationSection";
import YoutubeSection from "@/components/sections/YoutubeSection";
import VKGroupSection from "@/components/sections/VKGroupSection";
import ContactSection from "@/components/sections/ContactSection";
import DiscordWidget from "@/components/sections/DiscordWidget";
import AiCraftSection from "@/components/sections/AiCraftSection";
import CopyDataSection from "@/components/sections/CopyDataSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent text-accent-foreground">
      <div className="container px-4 py-8 mx-auto">
        <HeroSection />
        <CopyDataSection />
        <DonationSection />
        <YoutubeSection />
        <VKGroupSection />
        <ContactSection />
        <AiCraftSection />
        <DiscordWidget />
      </div>
    </div>
  );
};

export default Index;