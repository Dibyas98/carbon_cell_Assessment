import React from "react";
import { Menu } from "lucide-react";
import { Home } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Box } from 'lucide-react';
import Input from "./Input";
import Menu_Button from "./Menu_Button";
import { nanoid } from "nanoid";

const menu =[
    {
        name:'Home',
        icon:Home
    },
    {
        name:'Organisation',
        icon:Building2
    },
    {
        name:'Assets',
        icon:Box
    }
]

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo_section">
        <h3>LOGO</h3>
        <Menu className="burgur"></Menu>
      </div>
      <div className="navbar_input_section">
        <Input type={"text"} class={"search"}></Input>
      </div>
      <div className="navbar_menu_section">
        <ul className="navbar_menu_ul">
            {
                menu.map((ele) =>{
                    return <li key={nanoid()}><Menu_Button icon={ele.icon} menu={ele.name} class={'navbar_menu_list'}></Menu_Button></li>
                })
            }
        </ul>
      </div>
    </div>
  );
}
