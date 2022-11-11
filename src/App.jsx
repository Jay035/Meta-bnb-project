import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Community from "./pages/Community";
import Home from "./pages/Home";
import NFT from "./pages/NFTs";
import Places from "./pages/Places";

function App() {
  return (
    <Router>
      <div className="text-base font-RedRose">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/NFTs" element={<NFT />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
