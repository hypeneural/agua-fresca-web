
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimationProvider } from "./components/animations/AnimationProvider";
import { PageTransition } from "./components/animations/PageTransition";
import { ProgressIndicator } from "./components/animations/ProgressIndicator";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Wrapper component for route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <PageTransition mode="fade" duration={0.4}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AnimationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ProgressIndicator />
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AnimationProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
