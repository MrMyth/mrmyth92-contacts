import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Gamepad2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const CopyDataSection = () => {
  const { toast } = useToast();
  const ubisoftUsername = "MrMyth92";

  const handleCopyUbisoftUsername = () => {
    navigator.clipboard.writeText(ubisoftUsername);
    toast({
      title: "Ubisoft Connect имя скопировано",
      description: "Имя Ubisoft Connect было скопировано в буфер обмена",
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
          <Gamepad2 className="h-8 w-8 text-purple-600" />
          Ubisoft Connect
        </h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6 p-4 bg-gray-100 rounded-xl"
        >
          <p className="text-xl font-medium text-gray-900">
            Имя пользователя: <span className="font-mono text-purple-600">{ubisoftUsername}</span>
          </p>
          <Button
            onClick={handleCopyUbisoftUsername}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Copy className="mr-2 h-4 w-4" />
            Копировать имя
          </Button>
        </motion.div>
      </motion.div>
    </Card>
  );
};

export default CopyDataSection;