const initState = {
  usernameError: null,
  friendship: null,
  userfriends: [
    {id: 1, friends: [{id: 1, userName: 'jeff'}, {id: 2, userName: 'bezos'}, {id: 3, userName: 'sucks'}]},
    {id: 2, friends: [{id: 1, userName: 'someone'}, {id: 2, userName: 'else'}, {id: 3, userName: 'sucks'}]},
    {id: 3, friends: [{id: 1, userName: 'you'}, {id: 2, userName: 'also'}, {id: 3, userName: 'suck'}]},
  ]
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