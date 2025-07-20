
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Twitch } from "lucide-react";
import { motion } from "framer-motion";

const TwitchSection = () => {
  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
          <Twitch className="h-8 w-8 text-[#9146FF]" />
          Twitch канал
        </h2>
        <p className="text-gray-600 mb-6">Любые мои прямые эфиры, не важно по какой игре</p>
        
        <motion.a
          href="https://www.twitch.tv/mrmyth1992"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center rounded-md overflow-hidden bg-[#9146FF] hover:bg-[#9146FF]/90 text-white min-h-[80px]"
        >
          {/* Иконка платформы */}
          <div className="flex items-center justify-center bg-black/20 px-4 h-full min-h-[80px]">
            <Twitch className="h-8 w-8" />
          </div>
          
          {/* Текстовая часть */}
          <div className="flex-1 px-4 py-2 h-full flex flex-col justify-center">
            <div className="text-sm font-semibold mb-1">
              Посетить канал
            </div>
            <div className="text-xs opacity-80">
              @mrmyth1992
            </div>
          </div>
        </motion.a>
      </motion.div>
    </Card>
  );
};

export default TwitchSection;
