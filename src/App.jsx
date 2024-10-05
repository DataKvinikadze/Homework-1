import { useState } from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#141414]">
        <Header />
      </div>
    </>
  );
}

export default App;
