import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const Wallpapers = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.pages.wallpapers} - ${t.header.title}`;
    window.scrollTo(0, 0);
  }, [t]);

  const folders = [
    { id: "1hPnCOnUxcZ8tMsgiBC12ewEW_AGbLuBa", year: "2026" },
    { id: "143V724QAvO7Ahx3mIxfHFCDFKLZDKdFm", year: "2025" }
  ];

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
                {t.pages.wallpapers}
              </h1>
              <p className="text-xl font-medium text-gradient-secondary">{t.creations.subtitle}</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-24">
          {folders.map((folder, index) => (
            <section key={folder.id} id={`wallpapers-${folder.year}`} className="w-full max-w-6xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-2 bg-green-600 rounded-full" />
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-gradient-primary">
                  {folder.year} год
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-card"
              >
                <iframe
                  src={`https://drive.google.com/embeddedfolderview?id=${folder.id}#list`}
                  width="100%"
                  height="750"
                  frameBorder="0"
                  className="w-full h-[600px] md:h-[750px]"
                  title={`Google Drive Wallpapers ${folder.year}`}
                ></iframe>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wallpapers;
