import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Reservation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
