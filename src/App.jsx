import { useState } from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Devices from "./Components/Devices";
import Question from "./Components/Question";
import Plan from "./Components/Plan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#141414]">
        <Header />
        <Category />
        <Devices />
        <Question />
        <Plan />
      </div>
    </>
  );
}

export default App;
