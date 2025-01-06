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
    <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center text-black">
        <Heart className="text-primary" />
        Прием пожертвований
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <p className="text-lg">5599002035781774</p>
        <Button
          onClick={() =>
            copyToClipboard(
              "5599002035781774",
              "Номер карты скопирован в буфер обмена!"
            )
          }
          variant="outline"
          className="text-white"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Копировать номер
        </Button>
      </div>
    </Card>
  );
};

export default DonationSection;