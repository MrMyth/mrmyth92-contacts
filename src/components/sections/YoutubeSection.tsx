import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube, BellPlus } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const YoutubeSection = () => {
  const { t } = useLanguage();
  
  const channels = [
    {
      name: "The Division",
      url: "https://www.youtube.com/@MrMyth92_TC",
      subscribeUrl: "https://www.youtube.com/@MrMyth92_TC?sub_confirmation=1",
      description: t.youtube.divisionDesc,
      imageUrl: "/images/thedivision2-icon.png"
    },
    {
      name: "Assassin's Creed",
      url: "https://www.youtube.com/@MrMyth92_AC",
      subscribeUrl: "https://www.youtube.com/@MrMyth92_AC?sub_confirmation=1",
      description: t.youtube.acDesc,
      imageUrl: "/images/acs-icon.png"
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
              <Youtube className="h-10 w-10 text-[#FF0000]" />
              {t.youtube.title}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.youtube.subtitle}</p>
          </div>
        </div>
        
        <div className="space-y-16">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-red-600/20 rounded-full blur-2xl group-hover:bg-red-600/30 transition-all duration-500" />
                  <img 
                    src={channel.imageUrl} 
                    alt={channel.name}
                    className="relative w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
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
                    username={`@${channel.url.split('@')[1]}`}
                    bgColor="bg-[#FF0000]"
                    index={index}
                  />
                  
                  <SocialLinkCard
                    href={channel.subscribeUrl}
                    icon={<BellPlus />}
                    buttonText={t.youtube.subscribe}
                    username={`@${channel.url.split('@')[1]}`}
                    bgColor="bg-[#FF0000]"
                    index={index + 1}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default YoutubeSection;
