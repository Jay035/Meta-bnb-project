import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Community from "./pages/Community";
import Home from "./pages/Home";
import NFT from "./pages/NFTs";
import Places from "./pages/Places";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Initialize AOS
  AOS.init();

  return (
    <Router>
      <div className="text-base font-RedRose">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/NFTs" element={<NFT />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
