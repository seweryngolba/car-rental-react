import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={"/"}>OFFER</Link>
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>CARS</Link>
        <Link to={"/rent"}>RENT</Link>
        <Link to={"/"}>CONTACT</Link>
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
