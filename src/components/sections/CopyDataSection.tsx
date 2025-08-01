import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Gamepad2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const CopyDataSection = () => {
  const { toast } = useToast();
  
  const gameServices = [
    { name: "Ubisoft Connect", username: "MrMyth92" },
    { name: "EA", username: "MrMyth92" },
    { name: "Epic Games", username: "MrMyth1992" }
  ];

  const handleCopyUsername = (serviceName: string, username: string) => {
    navigator.clipboard.writeText(username);
    toast({
      title: `${serviceName} имя скопировано`,
      description: `Имя ${serviceName} было скопировано в буфер обмена`,
      duration: 2000,
    });
  };

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
          <Gamepad2 className="h-8 w-8 text-green-600" />
          Игровые сервисы
        </h2>
        
        <div className="space-y-4 mt-6">
          {gameServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center p-4 bg-gray-100 rounded-xl"
            >
              <p className="text-xl font-medium text-gray-900">
                <span className="text-gray-600">{service.name}:</span> <span className="font-mono text-green-600">{service.username}</span>
              </p>
              <Button
                onClick={() => handleCopyUsername(service.name, service.username)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Copy className="mr-2 h-4 w-4" />
                Копировать
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Card>
  );
};

export default CopyDataSection;