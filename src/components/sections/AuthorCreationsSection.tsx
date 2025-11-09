
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Palette } from "lucide-react";
import { motion } from "framer-motion";

const AuthorCreationsSection = () => {
  const creation = {
    id: "creative-works",
    name: "Посмотреть творческие работы",
    url: "https://cloud.mail.ru/public/tGzv/8rv5WXPWv",
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
    icon: (
      <>
        <Music className="mr-2 h-5 w-5" />
        <Palette className="mr-2 h-5 w-5" />
      </>
    )
  };

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
          <p className="text-gray-600">Коллекция авторской музыки и обоев на рабочий стол</p>
        </div>
        
        <motion.a
          href={creation.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button className={`w-full ${creation.bgColor} text-white`}>
            {creation.icon}
            {creation.name}
          </Button>
        </motion.a>
      </motion.div>
    </Card>
  );
};

export default AuthorCreationsSection;
