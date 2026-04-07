import React, { useEffect } from "react";
import TelegramSection from "@/components/sections/TelegramSection";
import VKGroupSection from "@/components/sections/VKGroupSection";
import DiscordWidget from "@/components/sections/DiscordWidget";
import OKSection from "@/components/sections/OKSection";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const Socials = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.pages.socials} - ${t.header.title}`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <Layout>
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
                {t.pages.socials}
              </h1>
              <p className="text-xl font-medium text-gradient-secondary">{t.pages.socialsSubtitle}</p>
            </div>
          </div>
        </motion.div>

        <section id="telegram-section">
          <TelegramSection />
        </section>
        <section id="vk-section">
          <VKGroupSection />
        </section>
        <section id="discord-section">
          <DiscordWidget />
        </section>
        <section id="ok-section">
          <OKSection />
        </section>
      </div>
    </Layout>
  );
};

export default Socials;
