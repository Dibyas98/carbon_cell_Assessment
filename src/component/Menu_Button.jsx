import React from 'react'

export default function Menu_Button(props) {
  // console.log(props.active);
    
  return (
    <div className={`${props.class}`} style={props.active ? { color: '#279927' } : { color: 'white' }}>
      <props.icon className={`${props.class}_icon`}></props.icon>
      <span>{props.menu}</span>
    </div>
  )
}
