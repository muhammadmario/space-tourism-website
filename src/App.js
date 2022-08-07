import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App font-barlow ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
