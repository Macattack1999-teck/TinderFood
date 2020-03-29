import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right-column">
      <div><NavLink to='/' />Signup</div>
      <div><NavLink to='/' />Login</div>
    </ul>
  )
}

export default SignedOutLinks;