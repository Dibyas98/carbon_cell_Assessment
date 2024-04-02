import { nanoid } from 'nanoid';
import React from 'react'
import { Menu } from "lucide-react";
import { Home } from "lucide-react";
import { Building2 } from "lucide-react";
import { Box } from "lucide-react";
import Menu_Button from './Menu_Button';
import Navbar_Footer from './Navbar_Footer';
import Profile from './Profile';

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

export default function Menu_Mobile() {
  return (
    <div className='menu_mobile'>
          <ul className="navbar_menu_ul navbar_mainmenu">
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
          <Navbar_Footer class="navbar_menu_list"></Navbar_Footer>
          <Profile></Profile>
    </div>
  )
}
