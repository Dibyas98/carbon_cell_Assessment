import React from "react";
import { Menu } from "lucide-react";
import { Home } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Box } from 'lucide-react';
import Input from "./Input";
import Menu_Button from "./Menu_Button";

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
        <Menu></Menu>
      </div>
      <div className="navbar_input_section">
        <Input type={"text"}></Input>
      </div>
      <div>
        <ul cla>
            {
                menu.map((ele) =>{
                    return <Menu_Button icon={ele.icon} menu={ele.name} class={'navbar_menu_list'}></Menu_Button>
                })
            }
        </ul>
      </div>
    </div>
  );
}
