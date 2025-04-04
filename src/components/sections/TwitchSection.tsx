import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Twitch } from "lucide-react";

const TwitchSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-2 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Twitch className="h-8 w-8 text-black" />
        Twitch канал
      </h2>
      <p className="text-center text-gray-600 mb-6">Любые мои прямые эфиры, не важно по какой игре</p>
      <div className="grid grid-cols-1 gap-4">
        <a
          href="https://www.twitch.tv/mrmyth1992"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#9146FF] text-white border-0 hover:bg-[#9146FF] hover:text-white transform-none">
            <Twitch className="mr-2 h-4 w-4 text-white" />
            Посетить канал
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default TwitchSection;
