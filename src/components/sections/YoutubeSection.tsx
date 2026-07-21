import React from "react";
import { Youtube, BellPlus } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const YoutubeSection = () => {
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
              <Youtube className="h-10 w-10 text-[#FF0000]" />
              {t.youtube.title}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.youtube.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SocialLinkCard
            href="https://www.youtube.com/@MrMyth92"
            icon={<Youtube />}
            buttonText={t.youtube.visitChannel}
            username="@MrMyth92"
            bgColor="bg-[#FF0000]"
            index={0}
          />
          <SocialLinkCard
            href="https://www.youtube.com/@MrMyth92?sub_confirmation=1"
            icon={<BellPlus />}
            buttonText={t.youtube.subscribe}
            username="@MrMyth92"
            bgColor="bg-[#FF0000]"
            index={1}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default YoutubeSection;
