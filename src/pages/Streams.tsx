import React, { useEffect } from "react";
import YoutubeSection from "@/components/sections/YoutubeSection";
import TwitchSection from "@/components/sections/TwitchSection";
import VKLiveSection from "@/components/sections/VKLiveSection";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const Streams = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.pages.streams} - ${t.header.title}`;
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
                {t.pages.streams}
              </h1>
              <p className="text-xl font-medium text-gradient-secondary">{t.youtube.subtitle}</p>
            </div>
          </div>
        </motion.div>

        <section id="youtube-section">
          <YoutubeSection />
        </section>
        <section id="twitch-section">
          <TwitchSection />
        </section>
        <section id="vk-live-section">
          <VKLiveSection />
        </section>
      </div>
    </Layout>
  );
};

export default Streams;
