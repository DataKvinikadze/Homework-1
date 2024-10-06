import { useState } from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Devices from "./Components/Devices";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#141414]">
        <Header />
        <Category />
        <Devices />
      </div>
    </>
  );
}

export default App;
