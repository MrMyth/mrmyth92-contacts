
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Примерные demo-обои, замените на свои изображения из OneDrive при необходимости
const demoWallpapers = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80",
];

const AiCraftSection = () => {
  const socialLinks = [
    {
      id: "vk",
      name: "Картины 21 века от AI",
      url: "https://vk.com/aicraftmymyth92",
      bgColor: "bg-[#0077FF] hover:bg-[#0077FF]/90",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.372 0 0 5.372 0 12C0 18.628 5.372 24 12 24C18.628 24 24 18.628 24 12C24 5.372 18.628 0 12 0ZM18.523 16.452..."/>
        </svg>
      )
    },
    {
      id: "telegram",
      name: "Картины 21 века от AI",
      url: "https://t.me/AiCraftMyMyth92",
      bgColor: "bg-[#229ED9] hover:bg-[#229ED9]/90",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24..."/>
        </svg>
      )
    },
    {
      id: "onedrive",
      name: "Посмотреть как папку",
      url: "https://1drv.ms/f/c/f81a80f52b9810b8/EhKIJI89qnBKn6l-zIzCLQ4Bb22quWH4Tyq61wMJru_FaQ?e=zT2Hz5",
      bgColor: "bg-[#F7D154] hover:bg-[#ECD26C]/90 text-[#513400]",
      icon: (
        // folder icon
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7.5C3 6.12 4.12 5 5.5 5H9.38c.62 0 1.21.28 1.59.78L12.41 7H18.5A2.5 2.5 0 0121 9.5V18.5A2.5 2.5 0 0118.5 21h-13A2.5 2.5 0 013 18.5v-11z" />
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
            <Palette className="h-8 w-8 text-green-600" />
            Обои на рабочий стол
          </h2>
          <p className="text-gray-600">Авторские обои на рабочий стол</p>
        </div>

        <div className="flex flex-col gap-4">
          {socialLinks.map((link, index) => (
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
              <Button className={`w-full ${link.bgColor}`}>
                {link.icon}
                {link.name}
              </Button>
            </motion.a>
          ))}
        </div>

        <div className="mt-8">
          <Carousel className="max-w-2xl mx-auto">
            <CarouselContent>
              {demoWallpapers.map((url, i) => (
                <CarouselItem key={i}>
                  <img
                    src={url}
                    alt={`Wallpaper ${i + 1}`}
                    className="rounded-lg object-cover w-full h-64 md:h-80 shadow"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.div>
    </Card>
  );
};

export default AiCraftSection;

