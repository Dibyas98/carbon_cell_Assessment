import React from "react";
import { Bell } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { Settings } from "lucide-react";
import Menu_Button from "./Menu_Button";
import { nanoid } from "nanoid";
const menu = [
  {
    name: "Notifications",
    icon: Bell,
    active: false,
  },
  {
    name: "Support",
    icon: CircleHelp,
    active: false,
  },
  {
    name: "Setting",
    icon: Settings,
    active: false,
  },
];
export default function Navbar_Footer(props) {
  return (
    <div className={`${props.class}`}>
      <ul className="navbar_menu_ul">
        {menu.map((ele) => {
          return (
            <li key={nanoid()}><Menu_Button 
                
              icon={ele.icon}
              menu={ele.name}
              active={ele.active}
              class= {"navbar_menu_list"}
              
            ></Menu_Button></li>
          );
        })}
      </ul>
    </div>
  );
}
