import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import RightMain from "./component/RightMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="screen">
        <Navbar></Navbar>
        <RightMain></RightMain>
      </section>
    </>
  );
}

export default App;
