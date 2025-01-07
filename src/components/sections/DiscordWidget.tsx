import React from "react";
import { Card } from "@/components/ui/card";

const DiscordWidget = () => {
  return (
    <Card className="p-6 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        Discord
      </h2>
      <div className="flex justify-center">
        <iframe
          src="https://discord.com/widget?id=1089843053176569913&theme=dark"
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="max-w-full rounded-lg border border-[#8B5CF6]/20"
        ></iframe>
      </div>
    </Card>
  );
};

export default DiscordWidget;