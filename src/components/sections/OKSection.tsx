import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { OKIcon } from "@/components/icons/SocialIcons";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const OKSection = () => {
  const { t } = useLanguage();
  
  const okLinks = [
    {
      buttonText: t.contacts.okProfile,
      username: "@MrMyth92",
      url: "https://ok.ru/profile/519663632974",
    }
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
              <OKIcon className="h-10 w-10 text-[#EE8208]" />
              {t.contacts.ok}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.contacts.okProfile}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {okLinks.map((link, index) => (
            <SocialLinkCard
              key={index}
              href={link.url}
              icon={<OKIcon />}
              buttonText={link.buttonText}
              username={link.username}
              bgColor="bg-[#EE8208]"
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OKSection;
