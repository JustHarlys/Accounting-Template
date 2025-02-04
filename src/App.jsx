import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPages from "./pages/ServicesPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPages/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App