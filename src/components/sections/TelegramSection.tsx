import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { TelegramIcon } from "@/components/icons/SocialIcons";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const TelegramSection = () => {
  const { t } = useLanguage();
  
  const telegramLinks = [
    { 
      id: "telegram-channel",
      buttonText: t.telegram.writeButton,
      username: "@MrMyth92",
      url: "https://t.me/MrMyth92",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
    },
    { 
      id: "telegram-second",
      buttonText: t.telegram.groupButton,
      username: t.telegram.previewDesc,
      url: "https://t.me/MrMyth92_DS",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
    },
    { 
      id: "telegram-public",
      buttonText: t.telegram.publicGroup,
      username: t.telegram.joinDesc,
      url: "https://t.me/+WkKIfu_LFrYxMzVi",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
    },
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
              <TelegramIcon className="h-10 w-10 text-[#229ED9]" />
              {t.telegram.title}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.telegram.subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {telegramLinks.map((link, index) => (
            <SocialLinkCard
              key={link.id}
              href={link.url}
              icon={<TelegramIcon />}
              buttonText={link.buttonText}
              username={link.username}
              bgColor={link.bgColor}
              index={index}
            />
          ))}
          
          <SocialLinkCard
            href="https://telegram.org/"
            icon={<TelegramIcon />}
            buttonText={t.telegram.downloadButton}
            username="telegram.org"
            bgColor="bg-gray-600"
            index={3}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default TelegramSection;
