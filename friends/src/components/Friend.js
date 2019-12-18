import React from 'react';

const Friend = props => {
  const show = props.friend.email.includes('friends') ? 'friends' : 'seinfeld';
  return (
    <div className={`friend-card ${show}`}>
      <h2>{props.friend.name}</h2>
      <p>{props.friend.email}</p>
    </div>
  )
}

export default Friend;