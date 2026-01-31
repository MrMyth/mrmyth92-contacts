import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { VKIcon } from "@/components/icons/SocialIcons";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const VKGroupSection = () => {
  const { t } = useLanguage();
  
  const vkLinks = [
    {
      buttonText: t.vk.goToGroup,
      username: "@mrmyth92ds",
      url: "https://vk.com/mrmyth92ds",
    },
    {
      buttonText: t.vk.watchStreams,
      username: "@mrmyth92",
      url: "https://live.vkvideo.ru/mrmyth92",
    },
    {
      buttonText: t.vk.goToProfile,
      username: "@mrmyth92",
      url: "https://vk.com/mrmyth92",
    }
  ];

  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-muted/50 to-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
          <VKIcon className="h-8 w-8 text-[#0077FF]" />
          {t.vk.title}
        </h2>
        <p className="text-muted-foreground mb-6">{t.vk.subtitle}</p>
        
        <div className="grid grid-cols-1 gap-4">
          {vkLinks.map((link, index) => (
            <SocialLinkCard
              key={index}
              href={link.url}
              icon={<VKIcon />}
              buttonText={link.buttonText}
              username={link.username}
              bgColor="bg-[#0077FF] hover:bg-[#0077FF]/90"
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </Card>
  );
};

export default VKGroupSection;
