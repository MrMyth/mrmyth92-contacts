import React from "react";
import { Card } from "@/components/ui/card";

const DiscordWidget = () => {
  return (
    <Card className="p-6 bg-card hover:animate-card-hover transition-all">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Discord</h2>
      <div className="flex justify-center">
        <iframe
          src="https://discord.com/widget?id=1089843053176569913&theme=dark"
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="max-w-full"
        ></iframe>
      </div>
    </Card>
  );
};

export default DiscordWidget;