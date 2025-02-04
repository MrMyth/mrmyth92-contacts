import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Twitch } from "lucide-react";

const TwitchSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Twitch className="h-8 w-8" />
        Twitch канал
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <a
          href="https://www.twitch.tv/mrmyth1992"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#9146FF] hover:bg-[#9146FF]/90 text-white border-0">
            <Twitch className="mr-2 h-4 w-4" />
            Посетить канал
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default TwitchSection;