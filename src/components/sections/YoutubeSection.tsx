import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube, BellPlus } from "lucide-react";

const YoutubeSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-2 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Youtube className="h-8 w-8 text-black" />
        YouTube канал
      </h2>
      <p className="text-center text-gray-600 mb-6">Мой Youtube канал по франшизе The Division</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <a
          href="https://www.youtube.com/@MrMyth92_TC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#FF0000] text-white border-0 hover:bg-[#FF0000] hover:text-white transform-none">
            <Youtube className="mr-2 h-4 w-4 text-white" />
            Посетить канал
          </Button>
        </a>
        <a
          href="https://www.youtube.com/@MrMyth92_TC?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#FF0000] text-white border-0 hover:bg-[#FF0000] hover:text-white transform-none">
            <BellPlus className="mr-2 h-4 w-4 text-white" />
            Подписаться на канал
          </Button>
        </a>
      </div>
      
      <p className="text-center text-gray-600 mb-6">Мой Youtube канал по франшизе Assassin's Creed</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://www.youtube.com/@MrMyth92_AC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#FF0000] text-white border-0 hover:bg-[#FF0000] hover:text-white transform-none">
            <Youtube className="mr-2 h-4 w-4 text-white" />
            Посетить канал
          </Button>
        </a>
        <a
          href="https://www.youtube.com/@MrMyth92_AC?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#FF0000] text-white border-0 hover:bg-[#FF0000] hover:text-white transform-none">
            <BellPlus className="mr-2 h-4 w-4 text-white" />
            Подписаться на канал
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default YoutubeSection;