
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import DonationSection from "@/components/sections/DonationSection";
import YoutubeSection from "@/components/sections/YoutubeSection";
import VKGroupSection from "@/components/sections/VKGroupSection";
import ContactSection from "@/components/sections/ContactSection";
import DiscordWidget from "@/components/sections/DiscordWidget";
import AiCraftSection from "@/components/sections/AiCraftSection";
import CopyDataSection from "@/components/sections/CopyDataSection";
import TwitchSection from "@/components/sections/TwitchSection";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/NavigationMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavigationMenu />
      <div className="container px-4 py-8 mx-auto">
        <section id="hero-section">
          <HeroSection />
        </section>
        <section id="about-me-section">
          <AboutMeSection />
        </section>
        <section id="contacts-section">
          <CopyDataSection />
        </section>
        <section id="donation-section">
          <DonationSection />
        </section>
        <section id="youtube-section">
          <YoutubeSection />
        </section>
        <section id="twitch-section">
          <TwitchSection />
        </section>
        <section id="vk-section">
          <VKGroupSection />
        </section>
        <section id="discord-section">
          <DiscordWidget />
        </section>
        <section id="contact-section">
          <ContactSection />
        </section>
        <section id="ai-craft-section">
          <AiCraftSection />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
