import { useState } from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Devices from "./Components/Devices";
import Question from "./Components/Question";
import Plan from "./Components/Plan";
import FreeTrail from "./Components/FreeTrail";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#141414]">
        <Header />
        <Category />
        <Devices />
        <Question />
        <Plan />
        <FreeTrail />
        <Footer />
      </div>
    </>
  );
}

export default App;
