import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="w-full font-montserrat dark:bg-black/80 bg-black/80 text-neutral-200">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
