import { Route, Routes } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import SmoothScrollProvider from "./components/hooks/smoothScrollProvider";
import Home from "./pages/home/page";
import AuraExperience from "./pages/aura-experience/page";

function App() {
  return (
    <div className="w-full font-montserrat dark:bg-black/80 bg-black/80 text-neutral-200">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aura-experience" element={<AuraExperience />} />
      </Routes>
      <Footer />
    </div>
    // <SmoothScrollProvider>
    // </SmoothScrollProvider>
  );
}

export default App;
