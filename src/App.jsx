import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPages from "./pages/ServicesPages";
import BotToggleProvider from "./Context/BotToggle";

function App() {

  return (
    <BotToggleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPages/>} />
        </Routes>
      </BrowserRouter>
    </BotToggleProvider>
  )
}

export default App