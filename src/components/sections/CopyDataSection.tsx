import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, ClipboardCopy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CopyDataSection = () => {
  const { toast } = useToast();
  const email = "dmstarchikov@outlook.com";
  const cardNumber = "5599002035781774";

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

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="section-header justify-center">
        <ClipboardCopy className="h-8 w-8" />
        Данные для копирования
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl text-[#F1F1F1]">Email: {email}</p>
          <Button
            onClick={handleCopyEmail}
            variant="outline"
            className="gaming-button bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 text-white border-0"
          >
            <Copy className="mr-2 h-4 w-4" />
            Копировать Email
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl text-[#F1F1F1]">Номер карты: {cardNumber}</p>
          <Button
            onClick={handleCopyCard}
            variant="outline"
            className="gaming-button bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 text-white border-0"
          >
            <Copy className="mr-2 h-4 w-4" />
            Копировать номер
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CopyDataSection;