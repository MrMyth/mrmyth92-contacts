import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Gamepad2, Zap, ShoppingCart, Gamepad, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const CopyDataSection = () => {
  const { toast } = useToast();
  
  const gameServices = [
    { name: "Ubisoft Connect", username: "MrMyth92", isCode: false, icon: Gamepad2 },
    { name: "EA", username: "MrMyth92", isCode: false, icon: ShoppingCart },
    { name: "Epic Games", username: "MrMyth1992", isCode: false, icon: Zap },
    { name: "Steam", username: "882746935", isCode: true, icon: Users }
  ];

  const handleCopyUsername = (serviceName: string, username: string, isCode: boolean) => {
    navigator.clipboard.writeText(username);
    const type = isCode ? "код дружбы" : "имя";
    toast({
      title: `${serviceName} ${type} скопировано`,
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} ${serviceName} было скопировано в буфер обмена`,
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {gameServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 p-4 bg-gray-100 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-semibold text-gray-900">
                    {service.name} {service.isCode ? "(код дружбы)" : ""}
                  </span>
                </div>
                <p className="text-base font-mono text-green-600 break-all">
                  {service.username}
                </p>
                <Button
                  onClick={() => handleCopyUsername(service.name, service.username, service.isCode)}
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  size="sm"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Копировать
                </Button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Card>
  );
};

export default CopyDataSection;