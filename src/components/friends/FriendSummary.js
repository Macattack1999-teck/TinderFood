import React from 'react'

const FriendSummary = ({friends}) => {
  return (
    <div className="friends">
      {/* { friends && friends.map(friend => {
        return (
          <div>
            {friend.id}
          </div>
        )
      })} */}
      {friends.friends.map(friend => {
        return <div key={friend.id}>{friend.userName}</div>
      })}
    </div>
  )
}

export default FriendSummary