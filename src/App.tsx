
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import Streams from "./pages/Streams";
import Socials from "./pages/Socials";
import Music from "./pages/Music";
import Wallpapers from "./pages/Wallpapers";
import Gaming from "./pages/Gaming";
import Support from "./pages/Support";
import Email from "./pages/Email";
import StreamRules from "./pages/StreamRules";
import PCSpecs from "./pages/PCSpecs";

// Создание и настройка клиента для запросов
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 минут
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/music" element={<Music />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/support" element={<Support />} />
            <Route path="/email" element={<Email />} />
            <Route path="/stream-rules" element={<StreamRules />} />
            <Route path="/setup" element={<PCSpecs />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
