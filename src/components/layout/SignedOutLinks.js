import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="sign-right-column">
      <div>
        <NavLink to='/signup'>Signup</NavLink>
      </div>

      <div>
        <NavLink to='/signin'>Login</NavLink>
      </div>
    </ul>
  )
}

export default SignedOutLinks;