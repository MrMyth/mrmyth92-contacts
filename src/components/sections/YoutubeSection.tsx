import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube } from "lucide-react";

const YoutubeSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        YouTube канал
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://www.youtube.com/@MrMyth92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white border-0">
            <Youtube className="mr-2 h-4 w-4" />
            Посетить канал
          </Button>
        </a>
        <a
          href="https://www.youtube.com/@MrMyth92?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white border-0">
            <Youtube className="mr-2 h-4 w-4" />
            Подписаться на канал
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default YoutubeSection;