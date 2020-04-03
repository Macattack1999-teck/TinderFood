import React from 'react'
import FriendSummary from './FriendSummary'

const FriendList = ({userfriends}) => {
  return (
    <div className="friends">
      { userfriends && userfriends.map(friends => {
        return (
          <FriendSummary friends={friends} key={friends.id} />
        )
      })}
    </div>
  )
}

export default FriendList