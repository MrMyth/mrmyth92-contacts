import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, AlertCircle, Copy, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const DiscordWidget = () => {
  const { toast } = useToast();
  const discordUsername = "MrMyth92";

  const handleCopyDiscordUsername = () => {
    navigator.clipboard.writeText(discordUsername);
    toast({
      title: "Discord ник скопирован",
      description: "Ник Discord был скопирован в буфер обмена",
      duration: 2000,
    });
  };

  const socialLinks = [
    {
      name: "Зайти на сервер",
      url: "https://discord.gg/rk7ZeadZGH",
      icon: <ArrowRight className="h-5 w-5" />,
      bgColor: "bg-[#5865F2] hover:bg-[#5865F2]/90",
    },
    {
      name: "Подробнее о сервере",
      url: "https://div2-fromrussia.lovable.app",
      icon: (
        <div className="flex items-center">
          <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
          </svg>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
          </svg>
        </div>
      ),
      bgColor: "bg-[#5865F2] hover:bg-[#5865F2]/90",
    },
    {
      name: "Скачать Discord",
      url: "https://discord.com/download",
      icon: <Download className="h-5 w-5" />,
      bgColor: "bg-[#5865F2] hover:bg-[#5865F2]/90",
    },
    {
      name: "Разблокировка Discord + YouTube + Twitch в РФ",
      url: "https://www.dropbox.com/scl/fo/56eaxni1xffpzc65e0qny/AJrvVoVtCNaJHQP-9-pa3JA?rlkey=cc5dgfsdjmgjbc75m2u8yc02f&e=2&dl=0",
      icon: <AlertCircle className="h-5 w-5" />,
      customButton: (
        <div className="w-full relative group overflow-hidden rounded-md">
          <div className="absolute inset-0 flex">
            <div className="w-1/3 bg-[#5865F2]"></div>
            <div className="w-1/3 bg-[#FF0000]"></div>
            <div className="w-1/3 bg-[#9147FF]"></div>
          </div>
          <Button className="w-full relative bg-transparent hover:bg-black/10 text-white h-10">
            <div className="flex items-center z-10">
              <AlertCircle className="h-5 w-5 mr-2" />
              Разблокировка Discord + YouTube + Twitch в РФ
            </div>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
            <svg className="h-8 w-8 text-[#5865F2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor" />
            </svg>
            Discord
          </h2>
          <p className="text-gray-600">Все, что связано с Discord</p>
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
            <h3 className="text-xl font-semibold text-gray-900">Виджет Discord сервера "From Russia"</h3>
            <iframe 
              src="https://discord.com/widget?id=835802952521351180&theme=light" 
              width="100%" 
              height="500" 
              allowTransparency={true}
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" 
              className="rounded-xl border-2 border-purple-500/20 shadow-lg"
              title="Discord Widget"
              loading="lazy"
            ></iframe>
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
              <h3 className="text-xl font-semibold text-gray-900">Как присоединиться к серверу?</h3>
              <div className="p-4 rounded-xl bg-gray-100">
                <p className="text-gray-700">
                  Чтобы зайти на сервер нажмите на "Зайти на сервер". Если приглашение не сработало, 
                  то используйте кнопку "Join Discord" в правом нижнем углу виджета.
				  Если у вас проблемы с разблокировкой: сперва добавьтесь в Telegram и я попробую вам помочь.
                </p>
              </div>
            </div>
            
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
                  {link.customButton || (
                    <Button className={`w-full ${link.bgColor} text-white`}>
                      {link.icon}
                      {link.name}
                    </Button>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Discord username */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-xl bg-gray-100 flex items-center gap-4"
            >
              <div>
                <p className="font-medium text-gray-900">Мой ник Discord:</p>
                <p className="text-lg font-mono text-green-600">{discordUsername}</p>
              </div>
              <Button 
                size="sm" 
                onClick={handleCopyDiscordUsername}
                className="ml-auto bg-green-600 hover:bg-green-700"
              >
                <Copy className="mr-2 h-4 w-4" />
                Копировать
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Card>
  );
};

export default DiscordWidget;