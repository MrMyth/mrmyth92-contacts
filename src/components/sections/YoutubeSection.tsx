import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube, BellPlus } from "lucide-react";
import { motion } from "framer-motion";

const YoutubeSection = () => {
  const channels = [
    {
      name: "The Division",
      url: "https://www.youtube.com/@MrMyth92_TC",
      subscribeUrl: "https://www.youtube.com/@MrMyth92_TC?sub_confirmation=1",
      description: "Мой Youtube канал по франшизе The Division",
      imageUrl: "https://i.postimg.cc/rpHYWb3T/thedivision2-icon1-1-1.png"
    },
    {
      name: "Assassin's Creed",
      url: "https://www.youtube.com/@MrMyth92_AC",
      subscribeUrl: "https://www.youtube.com/@MrMyth92_AC?sub_confirmation=1",
      description: "Мой Youtube канал по франшизе Assassin's Creed",
      imageUrl: "https://i.postimg.cc/qqVbDKpZ/ACS.png"
    }
  ];

  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
          <Youtube className="h-8 w-8 text-[#FF0000]" />
          YouTube каналы
        </h2>
        <p className="text-center text-gray-600 mb-6">Мои Youtube каналы</p>
        
        {channels.map((channel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              {channel.imageUrl && (
                <div className="hidden md:block">
                  <img 
                    src={channel.imageUrl} 
                    alt={channel.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
              <p className="text-center text-gray-600">{channel.description}</p>
              {channel.imageUrl && (
                <div className="hidden md:block">
                  <img 
                    src={channel.imageUrl} 
                    alt={channel.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center rounded-md overflow-hidden bg-[#FF0000] hover:bg-[#FF0000]/90 text-white min-h-[80px]"
              >
                {/* Иконка платформы */}
                <div className="flex items-center justify-center bg-black/20 px-4 h-full min-h-[80px]">
                  <Youtube className="h-8 w-8" />
                </div>
                
                {/* Текстовая часть */}
                <div className="flex-1 px-4 py-2 h-full flex flex-col justify-center">
                  <div className="text-sm font-semibold mb-1">
                    Посетить канал
                  </div>
                  <div className="text-xs opacity-80">
                    @{channel.name}
                  </div>
                </div>
              </motion.a>
              
              <motion.a
                href={channel.subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center rounded-md overflow-hidden bg-[#FF0000] hover:bg-[#FF0000]/90 text-white min-h-[80px]"
              >
                {/* Иконка платформы */}
                <div className="flex items-center justify-center bg-black/20 px-4 h-full min-h-[80px]">
                  <BellPlus className="h-8 w-8" />
                </div>
                
                {/* Текстовая часть */}
                <div className="flex-1 px-4 py-2 h-full flex flex-col justify-center">
                  <div className="text-sm font-semibold mb-1">
                    Подписаться
                  </div>
                  <div className="text-xs opacity-80">
                    @{channel.name}
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};

export default YoutubeSection;