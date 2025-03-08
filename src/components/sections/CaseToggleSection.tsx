
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CaseSensitive, CaseUpper, CaseLower } from "lucide-react";

const CaseToggleSection = () => {
  const [activeCase, setActiveCase] = useState<"normal" | "uppercase" | "lowercase">("normal");

  useEffect(() => {
    // Apply the text case to the body element
    if (activeCase === "uppercase") {
      document.body.style.textTransform = "uppercase";
    } else if (activeCase === "lowercase") {
      document.body.style.textTransform = "lowercase";
    } else {
      document.body.style.textTransform = "none";
    }

    // Cleanup function
    return () => {
      document.body.style.textTransform = "none";
    };
  }, [activeCase]);

  return (
    <div className="mb-6 flex justify-center">
      <div className="inline-flex items-center gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
        <Button
          variant={activeCase === "normal" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCase("normal")}
          className="flex items-center gap-1"
        >
          <CaseSensitive className="h-4 w-4" />
          <span className="text-xs">Normal</span>
        </Button>
        <Button
          variant={activeCase === "uppercase" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCase("uppercase")}
          className="flex items-center gap-1"
        >
          <CaseUpper className="h-4 w-4" />
          <span className="text-xs">UPPERCASE</span>
        </Button>
        <Button
          variant={activeCase === "lowercase" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCase("lowercase")}
          className="flex items-center gap-1"
        >
          <CaseLower className="h-4 w-4" />
          <span className="text-xs">lowercase</span>
        </Button>
      </div>
    </div>
  );
};

export default CaseToggleSection;
