import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Gamepad2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CopyDataSection = () => {
  const { toast } = useToast();
  const ubisoftUsername = "MrMyth92";

  const handleCopyUbisoftUsername = () => {
    navigator.clipboard.writeText(ubisoftUsername);
    toast({
      title: "Ubisoft Connect имя скопировано",
      description: "Имя Ubisoft Connect было скопировано в буфер обмена",
    });
  };

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Gamepad2 className="h-8 w-8 text-black" />
        Ubisoft Connect
      </h2>
      <div className="flex flex-col gap-6">
        {/* Ubisoft username row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <p className="text-xl text-black">Имя пользователя: {ubisoftUsername}</p>
          <Button
            onClick={handleCopyUbisoftUsername}
            variant="outline"
            className="gaming-button bg-[#1B4D3E] hover:bg-[#1B4D3E]/80 text-white border-0"
          >
            <Copy className="mr-2 h-4 w-4 text-white" />
            Копировать имя
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CopyDataSection;
