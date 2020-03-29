import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right-column">
      <div><NavLink to='/' />New Resturant</div>
      <div><NavLink to='/' />Log Out</div>
      <div><NavLink to='/' />Account</div>
    </ul>
  )
}

export default SignedInLinks;