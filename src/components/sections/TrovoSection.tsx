
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tv } from "lucide-react";
import { motion } from "framer-motion";

const TrovoSection = () => {
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
          <Tv className="h-8 w-8 text-[#2DED87]" />
          Trovo канал
        </h2>
        <p className="text-gray-600 mb-6">Альтернативная платформа для моих прямых эфиров</p>
        
        <motion.a
          href="https://trovo.live/s/MrMyth92?roomType=1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full bg-[#2DED87] hover:bg-[#2DED87]/90 text-white">
            <Tv className="mr-2 h-5 w-5" />
            Посетить канал
          </Button>
        </motion.a>
      </motion.div>
    </Card>
  );
};

export default TrovoSection;
