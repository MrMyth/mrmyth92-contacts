import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmailSection = () => {
  const { toast } = useToast();
  const email = "dmstarchikov92@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email скопирован",
      description: "Email адрес был скопирован в буфер обмена",
    });
  };

  return (
    <Card className="p-6 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        Почта
      </h2>
      <div className="space-y-4">
        <p className="text-xl text-[#F1F1F1]">Email: {email}</p>
        <Button
          onClick={handleCopyEmail}
          variant="outline"
          className="w-full gaming-button bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 text-white border-0"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Копировать Email
        </Button>
      </div>
    </Card>
  );
};

export default EmailSection;