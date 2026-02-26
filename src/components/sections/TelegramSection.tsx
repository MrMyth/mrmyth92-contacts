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
      username: "@MrMyth92_DS",
      url: "https://t.me/MrMyth92_DS",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
    },
    { 
      id: "telegram-public",
      buttonText: t.telegram.publicGroup,
      username: t.telegram.publicGroup,
      url: "https://t.me/+WkKIfu_LFrYxMzVi",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
    },
  ];

  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-muted/50 to-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
            <TelegramIcon className="h-8 w-8 text-[#229ED9]" />
            {t.telegram.title}
          </h2>
          <p className="text-muted-foreground">{t.telegram.subtitle}</p>
        </div>
        
        <div className="flex flex-col gap-4">
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
          
          {/* Дополнительная кнопка скачивания */}
          <SocialLinkCard
            href="https://telegram.org/"
            icon={<TelegramIcon />}
            buttonText={t.telegram.downloadButton}
            username="telegram.org"
            bgColor="bg-gray-600 hover:bg-gray-600/90"
            index={2}
          />
        </div>
      </motion.div>
    </Card>
  );
};

export default TelegramSection;
