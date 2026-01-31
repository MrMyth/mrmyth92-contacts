import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Copy, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/hooks/useTheme";
import { DiscordIcon } from "@/components/icons/SocialIcons";

const DiscordWidget = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const discordUsername = "MrMyth92";
  
  const handleCopyDiscordUsername = () => {
    navigator.clipboard.writeText(discordUsername);
    toast({
      title: t.discord.nicknameCopied,
      description: t.discord.nicknameCopiedDesc,
      duration: 2000
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
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-muted/50 to-card">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
            <DiscordIcon className="h-8 w-8 text-[#5865F2]" />
            {t.discord.title}
          </h2>
          <p className="text-muted-foreground">{t.discord.subtitle}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Widget */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground">{t.discord.serverWidget}</h3>
            <iframe 
              key={theme}
              src={`https://discord.com/widget?id=835802952521351180&theme=${theme}`}
              width="100%" 
              height="500" 
              allowTransparency={true} 
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" 
              className="rounded-xl border-2 border-purple-500/20 shadow-lg" 
              title="Discord Widget" 
              loading="lazy"
            ></iframe>
            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg p-3 mt-3">
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">{t.discord.widgetWarning}</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{t.discord.howToJoin}</h3>
              <div className="p-4 rounded-xl bg-muted">
                <p className="text-foreground">{t.discord.howToJoinDesc}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{t.discord.mainGame}</h3>
              <div className="p-4 rounded-xl bg-muted">
                <p className="text-foreground">{t.discord.mainGameName}</p>
              </div>
            </div>

            {/* Discord username */}
            <motion.div 
              whileHover={{ scale: 1.01 }} 
              className="p-4 rounded-xl bg-muted flex items-center gap-4"
            >
              <div>
                <p className="font-medium text-foreground">{t.discord.myNickname}</p>
                <p className="text-lg font-mono text-green-600">{discordUsername}</p>
              </div>
              <Button size="sm" onClick={handleCopyDiscordUsername} className="ml-auto bg-green-600 hover:bg-green-700">
                <Copy className="mr-2 h-4 w-4" />
                {t.discord.copy}
              </Button>
            </motion.div>
            
            <div className="grid gap-3">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className={`w-full ${link.bgColor} text-white`}>
                    {link.icon}
                    {link.name}
                  </Button>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Card>
  );
};

export default DiscordWidget;
