import React, { useEffect } from "react";
import DonationSection from "@/components/sections/DonationSection";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const Support = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.pages.support} - ${t.header.title}`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <Layout>
      <div className="space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
                {t.pages.support}
              </h1>
              <p className="text-xl font-medium text-gradient-secondary">{t.donations.subtitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Fundraising Goal */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
                  <Target className="h-10 w-10 text-green-600" />
                  {t.donations.fundraisingTitle}
                </h2>
                <p className="text-xl font-medium text-gradient-secondary">{t.donations.fundraisingSubtitle}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] bg-amber-600 p-12 md:p-20 text-white shadow-2xl shadow-amber-600/20"
          >
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center space-y-8">
              <div className="space-y-2">
                <p className="text-sm font-black uppercase tracking-[0.3em] opacity-80">{t.donations.fundraisingTitle}</p>
                <h3 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                  {t.donations.fundraisingAmount}
                </h3>
              </div>
              <p className="text-xl md:text-3xl font-medium leading-tight max-w-3xl mx-auto opacity-90">
                {t.donations.fundraisingDesc}
              </p>
            </div>
          </motion.div>
        </section>

        <section id="donation-section">
          <DonationSection />
        </section>
      </div>
    </Layout>
  );
};

export default Support;
