import React from 'react'
import profile from '../assets/profile.png'

export default function Profile() {
  return (
    <div className='profile'>
      <img src={profile} alt="" />
      <div>
        <h3>Brooklyn Simmons</h3>
        <p>brooklyn@Simmons.com</p>
      </div>
    </div>
  )
}
