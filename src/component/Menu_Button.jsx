import React from 'react'

export default function Menu_Button(props) {
    
  return (
    <div className={`${props.class}`}>
      <props.icon className={`${props.class}_icon`}></props.icon>
      <span>{props.menu}</span>
    </div>
  )
}
