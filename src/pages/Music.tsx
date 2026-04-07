import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const Music = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.pages.music} - ${t.header.title}`;
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
                {t.pages.music}
              </h1>
              <p className="text-xl font-medium text-gradient-secondary">{t.creations.subtitle}</p>
            </div>
          </div>
        </motion.div>

        <section id="author-music-section" className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-card"
          >
            <iframe
              src="https://drive.google.com/embeddedfolderview?id=1TMDEbFXi1OuY4uguSz6jzooTquFfB8-9#list"
              width="100%"
              height="750"
              frameBorder="0"
              className="w-full h-[600px] md:h-[750px]"
              title="Google Drive Music Folder"
            ></iframe>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Music;
