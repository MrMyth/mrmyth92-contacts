
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Palette } from "lucide-react";
import { motion } from "framer-motion";

const AuthorCreationsSection = () => {
  const creations = [
    {
      id: "music",
      name: "Послушать музыку",
      url: "https://cloud.mail.ru/public/GX41/ugHEsFC2t",
      bgColor: "bg-orange-500 hover:bg-orange-600",
      icon: <Music className="mr-2 h-5 w-5" />
    },
    {
      id: "wallpapers",
      name: "Посмотреть обои на рабочий стол",
      url: "https://cloud.mail.ru/public/X3Ve/dmMxPq55M",
      bgColor: "bg-[#0178D4] hover:bg-[#0178D4]/90",
      icon: (
        <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7.5C3 6.12 4.12 5 5.5 5H9.38c.62 0 1.21.28 1.59.78L12.41 7H18.5A2.5 2.5 0 0121 9.5V18.5A2.5 2.5 0 0118.5 21h-13A2.5 2.5 0 013 18.5v-11z" />
        </svg>
      )
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
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
            <Music className="h-8 w-8 text-green-600" />
            <Palette className="h-8 w-8 text-blue-600" />
            Создано автором
          </h2>
          <p className="text-gray-600">Авторская музыка и обои на рабочий стол</p>
        </div>
        
        <div className="flex flex-col gap-4">
          {creations.map((creation, index) => (
            <motion.a
              key={creation.id}
              href={creation.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className={`w-full ${creation.bgColor} text-white`}>
                {creation.icon}
                {creation.name}
              </Button>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Card>
  );
};

export default AuthorCreationsSection;
