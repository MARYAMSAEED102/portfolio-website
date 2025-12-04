import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Writings from "./pages/Writings";
import NotFound from "./pages/NotFound";
import MindHushProjectDetail from "./pages/MindHush";
import LottoStrategies from "./pages/LottoStrategies";
import Lordev from "./pages/Lordev";
import MoreLife from "./pages/MoreLife";
import NobelAdventure from "./pages/NobelAdventure";
import GymRepairs from "./pages/GymRepairs";
import TvBits from "./pages/TvBits";
import Grocer from "./pages/Grocer";
import Cumberland from "./pages/Cumberland";
import TvBitsCaseStudy from "./pages/TvBitsCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/experience" element={<Layout><Experience /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/projects/mind-hush" element={<Layout><MindHushProjectDetail /></Layout>} />
          <Route path="/projects/lotto-strategies" element={<Layout><LottoStrategies /></Layout>} />
          <Route path="/projects/lordev" element={<Layout><Lordev /></Layout>} />
          <Route path="/projects/more-life" element={<Layout><MoreLife /></Layout>} />
          <Route path="/projects/noble-adventure" element={<Layout><NobelAdventure /></Layout>} />
          <Route path="/projects/gym-repairs" element={<Layout><GymRepairs /></Layout>} />
          <Route path="/projects/tv-bits" element={<Layout><TvBits /></Layout>} />
          <Route path="/projects/grocer-case-study" element={<Grocer />} />
          <Route path="/projects/cumberland" element={<Layout><Cumberland /></Layout>} />
          <Route path="/writings" element={<Layout><Writings /></Layout>} />
          <Route path="/projects/tv-bits-case-study" element={<TvBitsCaseStudy />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
