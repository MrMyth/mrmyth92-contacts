
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users } from "lucide-react";

const VKGroupSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Users className="h-8 w-8 text-black" />
        Группа в VK
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <a
          href="https://vk.com/mrmyth92ds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#0077FF] hover:bg-[#0077FF]/90 text-black border-0">
            <MessageSquare className="mr-2 h-4 w-4 text-black" />
            Группа в VK
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default VKGroupSection;
