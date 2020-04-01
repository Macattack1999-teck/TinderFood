import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
  const { auth } = props
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <Link to='/' className="brand-logo">TinderFood</Link>
      </div>

      <div className="links-wrapper">
        { links }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)