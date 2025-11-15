import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Busses from "./pages/Busses.jsx";
import Marshrutky from "./pages/Marshrutky.jsx";
import Trolleybusses from "./pages/Trolleybusses.jsx";
import Trains from "./pages/Trains.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busses" element={<Busses />} />
        <Route path="/marshrutky" element={<Marshrutky />} />
        <Route path="/trolleybusses" element={<Trolleybusses />} />
        <Route path="/trains" element={<Trains />} />
      </Routes>
    </Router>
  );
}

export default App;