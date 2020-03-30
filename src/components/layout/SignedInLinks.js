import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right-column">
      <NavLink to='/create'>New Resturant</NavLink>
      <NavLink to='/signin' onClick={props.signOut}>Log Out</NavLink>
      <NavLink to='/account'>Account</NavLink>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)