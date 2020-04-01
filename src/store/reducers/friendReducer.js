const initState = {
  usernameError: null,
  friendship: null
}

const friendReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FRIENDSHIP_CREATED':
      console.log('successfully created friendship')
      return {
        ...state,
        usernameError: null,
        friendship: 'Success!'
      }
    case 'INVALID_USERNAME':
        console.log('Invalid Username')
        return {
          ...state,
          usernameError: 'Invalid Username',
          friendship: null
        }
    default:
      return state;
  }
}

export default friendReducer