import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    id: new Date()
  })


const handleChange = e => {
  setNewFriend({
    ...newFriend,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
    .post('/friends', newFriend)
    .then(res => console.log('response from DB: ', res))
    .catch(err => console.log(err))
  setNewFriend({
    name: '',
    age: '',
    email: '',
    id: '',
  })
}

  return (
    <div className='friend-form'>
      <h2>Add a new friend!</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='name'
          type='text'
          name='name'
          value={newFriend.name}
          onChange={handleChange}
        />
        <input 
          placeholder='age'
          type='number'
          name='age'
          value={newFriend.age}
          onChange={handleChange}
        />
        <input 
          placeholder='email'
          type='email'
          name='email'
          value={newFriend.email}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default FriendForm;