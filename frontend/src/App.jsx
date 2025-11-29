import { Route, Routes } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/page";
import AuraExperience from "./pages/aura-experience/page";
import Gallery from "./pages/aura-gallery/page";
import AuraPackage from "./pages/aura-packages/page";
import ScrollToTop from "./utils/scrollToTop";
import AuraAboutUs from "./pages/aura-about/page";

function App() {
  return (
    <div className="w-full font-montserrat dark:bg-black/80 bg-black/80 text-neutral-200">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aura-gallery" element={<Gallery />} />
        <Route path="/aura-experience" element={<AuraExperience />} />
        <Route path="/aura-packages" element={<AuraPackage />} />
        <Route path="/about-stories-of-aura" element={<AuraAboutUs />} />
      </Routes>
      <Footer />
    </div>
    // <SmoothScrollProvider>
    // </SmoothScrollProvider>
  );
}

export default App;
