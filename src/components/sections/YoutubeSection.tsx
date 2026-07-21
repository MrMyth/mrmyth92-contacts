import React from "react";
import { Youtube, BellPlus } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const YoutubeSection = () => {
  const { t } = useLanguage();

  const channel = {
    name: "MrMyth92",
    url: "https://www.youtube.com/@MrMyth92",
    subscribeUrl: "https://www.youtube.com/@MrMyth92?sub_confirmation=1",
    description: t.youtube.channelDesc,
  };

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-2xl group-hover:bg-red-600/30 transition-all duration-500" />
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-red-600 flex items-center justify-center drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Youtube className="h-16 w-16 md:h-24 md:w-24 text-white" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-black tracking-tight uppercase text-gradient-primary">{channel.name}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed italic">{channel.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SocialLinkCard
                href={channel.url}
                icon={<Youtube />}
                buttonText={t.youtube.visitChannel}
                username="@MrMyth92"
                bgColor="bg-[#FF0000]"
                index={0}
              />

              <SocialLinkCard
                href={channel.subscribeUrl}
                icon={<BellPlus />}
                buttonText={t.youtube.subscribe}
                username="@MrMyth92"
                bgColor="bg-[#FF0000]"
                index={1}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default YoutubeSection;
