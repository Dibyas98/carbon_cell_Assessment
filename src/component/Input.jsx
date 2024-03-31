import React from 'react'

export default function Input(props) {
  return (
    <div className={`${props.class}`}>
      <input type={props.type} value={props.value}/>
    </div>
  )
}
