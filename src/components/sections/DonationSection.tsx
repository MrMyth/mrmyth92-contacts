import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, CreditCard } from "lucide-react";
import { toast } from "sonner";

const DonationSection = () => {
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast.success(message);
  };

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 justify-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        <Heart className="text-[#8B5CF6]" />
        Прием пожертвований
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <p className="text-xl text-[#F1F1F1]">5599002035781774</p>
        <Button
          onClick={() =>
            copyToClipboard(
              "5599002035781774",
              "Номер карты скопирован в буфер обмена!"
            )
          }
          variant="outline"
          className="gaming-button bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 text-white border-0"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Копировать номер
        </Button>
      </div>
    </Card>
  );
};

export default DonationSection;