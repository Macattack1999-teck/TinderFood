import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right-column">
      <div>
        <NavLink  activeClassName="active" to='/addfriend'>Add Friend</NavLink>
      </div>

      <div>
        <NavLink  activeClassName="active" to='/friends'>Friends</NavLink>
      </div>

      <div>
        <NavLink activeClassName="active" to='/create'>New Resturant</NavLink>
      </div>

      <div>
        <NavLink activeClassName="active"to='/account'>Account</NavLink>
      </div>

      <div>
        <NavLink  activeClassName="active" to='/signin' onClick={props.signOut}>Log Out</NavLink>
      </div>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)