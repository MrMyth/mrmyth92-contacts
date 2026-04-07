import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Copy, ArrowRight, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/hooks/useTheme";
import { DiscordIcon } from "@/components/icons/SocialIcons";

const DiscordWidget = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const discordUsername = "MrMyth92";
  
  const handleCopyDiscordUsername = () => {
    navigator.clipboard.writeText(discordUsername);
    toast.success(t.discord.nicknameCopied, {
      description: t.discord.nicknameCopiedDesc,
    });
  };
  
  const socialLinks = [
    {
      name: t.discord.joinServer,
      url: "https://discord.gg/rk7ZeadZGH",
      icon: <ArrowRight className="h-5 w-5" />,
      bgColor: "bg-[#5865F2] hover:bg-[#5865F2]/90"
    },
    {
      name: t.discord.aboutServer,
      url: "https://div2-fromrussia.lovable.app",
      icon: <DiscordIcon className="h-5 w-5 mr-1" />,
      bgColor: "bg-[#5865F2] hover:bg-[#5865F2]/90"
    },
    {
      name: t.discord.downloadDiscord,
      url: "https://discord.com/download",
      icon: <Download className="h-5 w-5" />,
      bgColor: "bg-[#5865F2] hover:bg-[#5865F2]/90"
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
              <DiscordIcon className="h-10 w-10 text-[#5865F2]" />
              {t.discord.title}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.discord.subtitle}</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Widget */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-purple-500/10 rounded-[2rem] blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
              <iframe 
                key={theme}
                src={`https://discord.com/widget?id=835802952521351180&theme=${theme}`}
                width="100%" 
                height="500" 
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" 
                className="relative rounded-[1.5rem] border border-purple-500/20 shadow-2xl" 
                title="Discord Widget" 
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
              <p className="text-sm font-bold text-amber-700 dark:text-amber-300 leading-tight">
                {t.discord.widgetWarning}
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight uppercase text-gradient-secondary">{t.discord.howToJoin}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{t.discord.howToJoinDesc}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight uppercase text-gradient-secondary">{t.discord.mainGame}</h3>
              <div className="inline-block px-6 py-3 bg-green-600/10 border border-green-600/20 rounded-full text-green-600 font-black tracking-tight uppercase">
                {t.discord.mainGameName}
              </div>
            </div>

            {/* Discord username */}
            <div className="p-8 rounded-[2rem] bg-card border border-border/50 space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-black uppercase tracking-widest text-gradient-secondary">{t.discord.myNickname}</p>
                <p className="text-4xl font-black tracking-tighter text-green-600">{discordUsername}</p>
              </div>
              <Button 
                onClick={handleCopyDiscordUsername} 
                className="w-full h-14 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest shadow-lg shadow-green-600/20"
              >
                <Copy className="mr-2 h-5 w-5" />
                {t.discord.copy}
              </Button>
            </div>
            
            <div className="grid gap-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full h-14 rounded-2xl bg-[#5865F2] hover:bg-[#5865F2]/90 text-white font-black uppercase tracking-widest shadow-lg shadow-[#5865F2]/20">
                    {link.icon}
                    {link.name}
                  </Button>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DiscordWidget;
