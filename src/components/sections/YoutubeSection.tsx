import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube } from "lucide-react";

const YoutubeSection = () => {
  return (
    <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center text-black">
        <Youtube className="text-[#FF0000]" />
        YouTube
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="https://www.youtube.com/channel/UCNtBvyXLkPJpAnuMtB76LcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white border-0" variant="outline">
            Посетить канал
          </Button>
        </a>
        <a
          href="https://www.youtube.com/channel/UCNtBvyXLkPJpAnuMtB76LcQ?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white border-0" variant="outline">
            Подписаться
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default YoutubeSection;