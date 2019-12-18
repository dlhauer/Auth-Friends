import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = props => {

  const [friends, setFriends] = useState([]);

  useEffect( () => {
    axiosWithAuth()
      .get('/friends')
      .then( res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch( err => console.log(err))
  }, [])

  console.log(localStorage.getItem('token'));
  return (
    <div className='friends-page'>
      <FriendForm setFriends={setFriends}/>
      <div className='friends-list'>
        {/* <h2>Friends List!</h2> */}
        {friends.map( (friend, index) => (
          <Friend key={index} friend={friend}/>
        ))}
      </div>
    </div>

  );
}

export default FriendsList;
