import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div className="site-bg">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-orb-1" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-orb-2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-orb-3" />
        {/* Elementos flotantes variados */}
        <svg className="absolute top-20 left-20 animate-float" width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="#fff" strokeWidth="1" opacity="0.15" />
        </svg>
        <svg className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }} width="80" height="80" viewBox="0 0 80 80">
          <polygon points="40,4 68,20 68,60 40,76 12,60 12,20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.12" />
        </svg>
        <svg className="absolute bottom-32 left-32 animate-glow" width="200" height="2" viewBox="0 0 200 2">
          <line x1="0" y1="1" x2="200" y2="1" stroke="#fff" strokeWidth="1" opacity="0.08" />
        </svg>
        <div className="absolute top-32 right-40 w-2 h-2 bg-cyber-accent rounded-full animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-60 w-1 h-1 bg-cyber-primary rounded-full animate-glow" style={{ animationDelay: '3s' }} />
        <svg className="absolute bottom-20 right-40 animate-spin-slow" width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke="#fff" strokeWidth="1" opacity="0.08" strokeDasharray="10,5" />
        </svg>
      </div>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
