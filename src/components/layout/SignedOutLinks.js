import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right-column">
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/signin'>Login</NavLink>
    </ul>
  )
}

export default SignedOutLinks;