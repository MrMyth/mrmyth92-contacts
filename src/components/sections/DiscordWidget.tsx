import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const DiscordWidget = () => {
  return (
    <Card className="p-6 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        Discord
      </h2>
      <div className="flex flex-col items-center gap-6">
        <iframe
          src="https://discord.com/widget?id=1089843053176569913&theme=dark"
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="max-w-full rounded-lg border border-[#8B5CF6]/20"
        ></iframe>
        <a
          href="https://discord.gg/vZrmPCUN7p"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[350px]"
        >
          <Button variant="outline" className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0">
            <MessageCircle className="mr-2 h-4 w-4" />
            Discord
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default DiscordWidget;