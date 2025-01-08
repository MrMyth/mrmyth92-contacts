import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, MessageCircle } from "lucide-react";

const AiCraftSection = () => {
  return (
    <Card className="p-6 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        Картины 21 века от Ai
      </h2>
      <div className="space-y-4">
        <a href="https://vk.com/aicraftmymyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full bg-[#0077FF] hover:bg-[#0077FF]/90 text-white border-0">
            <MessageSquare className="mr-2 h-4 w-4" />
            Картины 21 века от Ai
          </Button>
        </a>
        <a href="https://t.me/AiCraftMyMyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full bg-[#229ED9] hover:bg-[#229ED9]/90 text-white border-0">
            <MessageCircle className="mr-2 h-4 w-4" />
            Картины 21 века от Ai
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default AiCraftSection;