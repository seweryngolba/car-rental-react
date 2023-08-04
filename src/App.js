import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Reservation />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
