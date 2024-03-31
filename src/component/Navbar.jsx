import React from 'react'
import { Menu } from 'lucide-react';
import Input from './Input';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar_logo_section'>
        <h3>LOGO</h3>
        <Menu></Menu>
      </div>
      <div>
        <Input type={"text"}></Input>
      </div>
    </div>
  )
}
