
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const TelegramSection = () => {
  const telegramLinks = [
    { 
      id: "telegram-channel",
      name: "Написать в Telegram", 
      url: "https://t.me/MrMyth92",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.855 8.212L15.87 17.176C15.725 17.764 15.389 17.904 14.898 17.635L11.893 15.409L10.45 16.793C10.295 16.948 10.164 17.079 9.862 17.079L10.068 14.024L15.615 9.038C15.852 8.827 15.565 8.709 15.256 8.921L8.51 13.292L5.55 12.401C4.973 12.22 4.961 11.845 5.669 11.562L17.021 7.166C17.502 6.993 17.916 7.274 17.855 8.212Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: "telegram-second",
      name: "Telegram публичная группа", 
      url: "https://t.me/MrMyth92_DS",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.855 8.212L15.87 17.176C15.725 17.764 15.389 17.904 14.898 17.635L11.893 15.409L10.45 16.793C10.295 16.948 10.164 17.079 9.862 17.079L10.068 14.024L15.615 9.038C15.852 8.827 15.565 8.709 15.256 8.921L8.51 13.292L5.55 12.401C4.973 12.22 4.961 11.845 5.669 11.562L17.021 7.166C17.502 6.993 17.916 7.274 17.855 8.212Z" fill="currentColor"/>
        </svg>
      )
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
            <svg className="h-8 w-8 text-[#229ED9]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.855 8.212L15.87 17.176C15.725 17.764 15.389 17.904 14.898 17.635L11.893 15.409L10.45 16.793C10.295 16.948 10.164 17.079 9.862 17.079L10.068 14.024L15.615 9.038C15.852 8.827 15.565 8.709 15.256 8.921L8.51 13.292L5.55 12.401C4.973 12.22 4.961 11.845 5.669 11.562L17.021 7.166C17.502 6.993 17.916 7.274 17.855 8.212Z" fill="currentColor"/>
            </svg>
            Telegram
          </h2>
          <p className="text-gray-600">Все, что связано с Telegram</p>
        </div>
        
        <div className="flex flex-col gap-4">
          {telegramLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
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
    </Card>
  );
};

export default TelegramSection;
