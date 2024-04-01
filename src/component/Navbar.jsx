import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Home } from "lucide-react";
import { Building2 } from "lucide-react";
import { Box } from "lucide-react";
import Input from "./Input";
import Menu_Button from "./Menu_Button";
import { nanoid } from "nanoid";
import Menu_Mobile from "./Menu_Mobile";

const menu = [
  {
    name: "Home",
    icon: Home,
    active:true
  },
  {
    name: "Organisation",
    icon: Building2,
    active:false
  },
  {
    name: "Assets",
    icon: Box,
    active:false
  },
];

export default function Navbar({show}) {
  
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo_section">
          <h3>LOGO</h3>
          <Menu className="burgur" onClick={()=>show()}></Menu>
        </div>
        <div className="navbar_input_section">
          <Input type={"text"} class={"search"}></Input>
        </div>
        <div className="navbar_menu_section">
          <ul className="navbar_menu_ul">
            {menu.map((ele) => {
              return (
                <li key={nanoid()}>
                  <Menu_Button
                    icon={ele.icon}
                    menu={ele.name}
                    active = {ele.active}
                    class={"navbar_menu_list"}
                    
                  ></Menu_Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
