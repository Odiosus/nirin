import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage.jsx";
import ServicesPage from "./components/ServiсesPage/ServicesPage.jsx";
import Fastbooking from "./components/Fast-booking/FastBookingForm.jsx";
import TravelersPage from "./components/TravelersPage/TravelersPage.jsx";
import VipLoungePage from "./components/VipLoungePage/VipLoungePage.jsx";
import BurgerBody from "./components/BurgerBody/BurgerBody.jsx";
import { MenuContext } from "./components/MenuContext/MenuContext.js";
import { useEffect, useState } from "react";

function App() {
  const [isBurgerBodyVisible, setIsBurgerBodyVisible] = useState(false);

  const toggleMenu = () => {
    setIsBurgerBodyVisible(!isBurgerBodyVisible);
  };
  useEffect(() => {
    if (isBurgerBodyVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBurgerBodyVisible]);
  return (
    <MenuContext.Provider
      value={{ isBurgerBodyVisible, setIsBurgerBodyVisible, toggleMenu }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fastbooking" element={<Fastbooking />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/travelers" element={<TravelersPage />} />
          <Route path="/vip_lounge" element={<VipLoungePage />} />
        </Routes>
        <BurgerBody />
      </div>
    </MenuContext.Provider>
  );
}

export default App;
