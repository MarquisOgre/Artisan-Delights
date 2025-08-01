import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipesDashboard from "./pages/RecipesDashboard";
import OrderDashboard from "./pages/OrderDashboard";
import BackendDashboard from "./pages/BackendDashboard";
import CreateOrder from "./pages/CreateOrder";
import OrdersListPage from "./pages/OrdersList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrderDashboard />} />
          <Route path="/orders" element={<OrderDashboard />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/orders-list" element={<OrdersListPage />} />
          <Route path="/backend" element={<BackendDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
