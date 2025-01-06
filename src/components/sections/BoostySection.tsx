import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const BoostySection = () => {
  return (
    <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
      <a
        href="https://boosty.to/mrmyth92_ds/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button className="w-full bg-[#F15B3D] hover:bg-[#F15B3D]/90 text-white border-0" variant="outline">
          <ExternalLink className="mr-2 h-4 w-4" />
          Поддержать на Boosty
        </Button>
      </a>
    </Card>
  );
};

export default BoostySection;