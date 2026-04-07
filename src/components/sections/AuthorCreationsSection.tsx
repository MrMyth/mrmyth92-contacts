
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

interface AuthorCreationsSectionProps {
  type?: "music" | "wallpapers" | "all";
}

const AuthorCreationsSection: React.FC<AuthorCreationsSectionProps> = ({ type = "all" }) => {
  const { t } = useLanguage();
  
  const musicUrl = "https://drive.google.com/drive/folders/1TMDEbFXi1OuY4uguSz6jzooTquFfB8-9?usp=drive_link";
  const wallpapersUrl = "https://cloud.mail.ru/public/tGzv/8rv5WXPWv";

  const items = [
    {
      id: "music",
      title: t.pages.music,
      url: musicUrl,
      icon: <Music className="h-12 w-12 text-white drop-shadow-lg" />,
      smallIcon: <Music className="h-6 w-6" />,
      show: type === "music" || type === "all"
    },
    {
      id: "wallpapers",
      title: t.pages.wallpapers,
      url: wallpapersUrl,
      icon: <Palette className="h-12 w-12 text-white drop-shadow-lg" />,
      smallIcon: <Palette className="h-6 w-6" />,
      show: type === "wallpapers" || type === "all"
    }
  ].filter(item => item.show);

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
              <Palette className="h-10 w-10 text-green-600" />
              {type === "music" ? t.pages.music : type === "wallpapers" ? t.pages.wallpapers : t.creations.title}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.creations.subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block aspect-video md:aspect-[21/9] overflow-hidden rounded-[2.5rem] bg-card border border-border/50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div className="flex gap-4">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-medium tracking-widest uppercase text-xs">
                    {item.id === "music" ? "Google Drive" : "Cloud.Mail.ru Archive"}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {item.smallIcon}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AuthorCreationsSection;
