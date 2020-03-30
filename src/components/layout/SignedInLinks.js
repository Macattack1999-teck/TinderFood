import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right-column">
      <NavLink to='/create'>New Resturant</NavLink>
      <NavLink to='/'>Log Out</NavLink>
      <NavLink to='/account'>Account</NavLink>
    </ul>
  )
}

export default SignedInLinks;