
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Database } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CopyDataSection = () => {
  const { toast } = useToast();
  const email = "dmstarchikov@outlook.com";
  const cardNumber = "5599002109565798";
  const ubisoftUsername = "MrMyth92";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email скопирован",
      description: "Email адрес был скопирован в буфер обмена",
    });
  };

  const handleCopyCard = () => {
    navigator.clipboard.writeText(cardNumber);
    toast({
      title: "Номер карты скопирован",
      description: "Номер карты скопирован в буфер обмена!",
    });
  };

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
        <Database className="h-8 w-8 text-black" />
        Данные для копирования
      </h2>
      <div className="flex flex-col gap-6">
        {/* Email row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <p className="text-xl text-black">Email: {email}</p>
          <Button
            onClick={handleCopyEmail}
            variant="outline"
            className="gaming-button bg-[#1B4D3E] hover:bg-[#1B4D3E]/80 text-white border-0"
          >
            <Copy className="mr-2 h-4 w-4 text-white" />
            Копировать Email
          </Button>
        </div>
        
        {/* Card number row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <p className="text-xl text-black">Номер карты: {cardNumber}</p>
          <Button
            onClick={handleCopyCard}
            variant="outline"
            className="gaming-button bg-[#1B4D3E] hover:bg-[#1B4D3E]/80 text-white border-0"
          >
            <Copy className="mr-2 h-4 w-4 text-white" />
            Копировать номер
          </Button>
        </div>
        
        {/* Ubisoft username row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <p className="text-xl text-black">Ubisoft Connect: {ubisoftUsername}</p>
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
