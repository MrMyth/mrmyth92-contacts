import React from "react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const StreamRulesLink = () => {
  return (
    <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
          <Info className="h-8 w-8 text-green-600" />
          Информация для зрителей
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Узнайте важную информацию о моих трансляциях перед просмотром
        </p>
        <Link to="/stream-rules">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white gap-2">
            <Info className="h-5 w-5" />
            Открыть информацию
          </Button>
        </Link>
      </motion.div>
    </Card>
  );
};

export default StreamRulesLink;
