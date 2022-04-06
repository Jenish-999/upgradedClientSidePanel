import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";
import Inquery from "./pages/Inquery";
import About from "./pages/About";
import Events from "./pages/Events";
import Error404 from "./pages/Error404";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/inquery" element={<Inquery />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
