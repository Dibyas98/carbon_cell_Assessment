import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import RightMain from "./component/RightMain";
import Menu_Mobile from "./component/Menu_Mobile";

function App() {
  const [Showmenu, setShowMenu] = useState(false);
  const toggleShowMenu = ()=>{
    setShowMenu(!Showmenu)
  }

  return (
    <>
      <section className="screen">
        <Navbar show={toggleShowMenu}></Navbar>
        {Showmenu ? <Menu_Mobile></Menu_Mobile> : <></>}
        <RightMain></RightMain>
      </section>
    </>
  );
}

export default App;
