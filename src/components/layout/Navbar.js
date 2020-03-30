import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <Link to='/' className="brand-logo">TinderFood</Link>
      </div>

      <div className="links-wrapper">
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </div>
  )
}

export default Navbar;