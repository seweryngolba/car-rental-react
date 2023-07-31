import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import menuFunctions from "./functions/menuFunctions";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link className="nav-element logo" to={"/"}>
            CARS.
          </Link>
          <div id="mobile" className="mobile">
            <Link className="nav-element list" to={"/"}>
              OFFER
            </Link>
            <Link className="nav-element list" to={"/"}>
              ABOUT
            </Link>

            <Link className="nav-element list" to={"/rent"}>
              RENT
            </Link>
            <Link className="nav-element list" to={"/"}>
              CONTACT
            </Link>
          </div>
          <div id="hamMenu" className="ham-menu">
            <i id="barMenu" className="fa-solid fa-bars bars"></i>
            <i id="closeMenu" class="fa-regular fa-circle-xmark close"></i>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Reservation />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
