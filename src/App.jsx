import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="screen">
        <Navbar></Navbar>
      </section>
    </>
  );
}

export default App;
