
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, MessageCircle, Palette } from "lucide-react";

const AiCraftSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-2 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Palette className="h-8 w-8 text-black" />
        Обои на рабочий стол
      </h2>
      <p className="text-center text-gray-600 mb-6">Авторские обои на рабочий стол</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="https://vk.com/aicraftmymyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full bg-[#0077FF] hover:bg-[#0077FF]/90 text-white border-0">
            <MessageSquare className="mr-2 h-4 w-4 text-white" />
            Картины 21 века от Ai
          </Button>
        </a>
        <a href="https://t.me/AiCraftMyMyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full bg-[#229ED9] hover:bg-[#229ED9]/90 text-white border-0">
            <MessageCircle className="mr-2 h-4 w-4 text-white" />
            Картины 21 века от Ai
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default AiCraftSection;
