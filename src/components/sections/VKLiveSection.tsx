import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { VKIcon } from "@/components/icons/SocialIcons";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const VKLiveSection = () => {
  const { t } = useLanguage();
  
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
              <VKIcon className="h-10 w-10 text-[#0077FF]" />
              {t.vk.vkLive}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.vk.vkLiveDesc}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SocialLinkCard
            href="https://live.vkvideo.ru/mrmyth92"
            icon={<VKIcon />}
            buttonText={t.vk.vkLive}
            username="@mrmyth92"
            bgColor="bg-[#0077FF]"
            index={0}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default VKLiveSection;
