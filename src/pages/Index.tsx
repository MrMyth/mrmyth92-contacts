import React, { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import DonationSection from "@/components/sections/DonationSection";
import YoutubeSection from "@/components/sections/YoutubeSection";
import VKGroupSection from "@/components/sections/VKGroupSection";
import ContactSection from "@/components/sections/ContactSection";
import DiscordWidget from "@/components/sections/DiscordWidget";
import TelegramSection from "@/components/sections/TelegramSection";
import CopyDataSection from "@/components/sections/CopyDataSection";
import TwitchSection from "@/components/sections/TwitchSection";
import AuthorCreationsSection from "@/components/sections/AuthorCreationsSection";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/NavigationMenu";

const Index = () => {
  // Обрабатываем начальную прокрутку к хэшу при загрузке страницы
  useEffect(() => {
    // Дождемся рендеринга компонентов
    const handleInitialScroll = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    
    // Небольшая задержка для гарантии полной загрузки компонентов
    setTimeout(handleInitialScroll, 100);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <NavigationMenu />
      <main className="container px-4 py-8 mx-auto">
        <section id="hero-section" className="scroll-mt-20">
          <HeroSection />
        </section>
        <section id="about-me-section" className="scroll-mt-20">
          <AboutMeSection />
        </section>
        <section id="telegram-section" className="scroll-mt-20">
          <TelegramSection />
        </section>
        <section id="vk-section" className="scroll-mt-20">
          <VKGroupSection />
        </section>
        <section id="contact-section" className="scroll-mt-20">
          <ContactSection />
        </section>
        <section id="discord-section" className="scroll-mt-20">
          <DiscordWidget />
        </section>
        <section id="youtube-section" className="scroll-mt-20">
          <YoutubeSection />
        </section>
        <section id="twitch-section" className="scroll-mt-20">
          <TwitchSection />
        </section>
        <section id="contacts-section" className="scroll-mt-20">
          <CopyDataSection />
        </section>
        <section id="author-creations-section" className="scroll-mt-20">
          <AuthorCreationsSection />
        </section>
        <section id="donation-section" className="scroll-mt-20">
          <DonationSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
