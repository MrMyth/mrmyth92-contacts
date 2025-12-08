import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StreamRulesLink = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-3 text-foreground">
        Правила стрима
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Узнайте важную информацию о моих трансляциях перед просмотром
      </p>
      <Link to="/stream-rules">
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white gap-2">
          <BookOpen className="h-5 w-5" />
          Открыть правила
        </Button>
      </Link>
    </div>
  );
};

export default StreamRulesLink;
