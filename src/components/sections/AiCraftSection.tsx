
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, MessageCircle, Palette, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const AiCraftSection = () => {
  const socialLinks = [
    { 
      id: "vk", 
      name: "Картины 21 века от Ai", 
      url: "https://vk.com/aicraftmymyth92", 
      icon: <MessageSquare className="mr-2 h-4 w-4 text-white" />, 
      bgColor: "bg-[#0077FF]", 
      hoverColor: "hover:bg-[#0077FF]/90" 
    },
    { 
      id: "telegram", 
      name: "Картины 21 века от Ai", 
      url: "https://t.me/AiCraftMyMyth92", 
      icon: <MessageCircle className="mr-2 h-4 w-4 text-white" />, 
      bgColor: "bg-[#229ED9]", 
      hoverColor: "hover:bg-[#229ED9]/90" 
    },
  ];

  return (
    <Card className="p-6 mb-8 gaming-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
          <Palette className="h-8 w-8 text-black" />
          Обои на рабочий стол
        </h2>
        <p className="text-center text-gray-600 mb-6">Авторские обои на рабочий стол</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
            >
              <Button 
                variant="outline" 
                className={`w-full ${link.bgColor} ${link.hoverColor} text-white border-0 flex items-center justify-center`}
              >
                {link.icon}
                <span>{link.name}</span>
                <ExternalLink className="ml-2 h-3 w-3 text-white opacity-70" />
              </Button>
            </a>
          ))}
        </div>
      </motion.div>
    </Card>
  );
};

export default AiCraftSection;
