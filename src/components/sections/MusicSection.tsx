
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music } from "lucide-react";
import { motion } from "framer-motion";

const MusicSection = () => {
  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
          <Music className="h-8 w-8 text-green-600" />
          Авторская музыка
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Слушайте мои музыкальные произведения и композиции
        </p>
        
        <div className="flex justify-center">
          <motion.a
            href="https://disk.yandex.ru/d/CsRGP5m9_T_XKg"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-md"
          >
            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 h-10 px-4 py-2">
              <Music className="mr-2 h-5 w-5" />
              Послушать музыку
            </Button>
          </motion.a>
        </div>
      </motion.div>
    </Card>
  );
};

export default MusicSection;
