import { Route, Routes } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/page";
import AuraExperience from "./pages/aura-experience/page";
import Gallery from "./pages/aura-gallery/page";
import AuraPackage from "./pages/aura-packages/page";

function App() {
  return (
    <div className="w-full font-montserrat dark:bg-black/80 bg-black/80 text-neutral-200">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aura-gallery" element={<Gallery />} />
        <Route path="/aura-experience" element={<AuraExperience />} />
        <Route path="/aura-packages" element={<AuraPackage />} />
      </Routes>
      <Footer />
    </div>
    // <SmoothScrollProvider>
    // </SmoothScrollProvider>
  );
}

export default App;
