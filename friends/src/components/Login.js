import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = props => {
  const [credentials, setCredentials] = useState( {
    username: '',
    password: '',
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

   const login = e => {
     e.preventDefault();
     axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        // console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends')
      })
      .catch(err => console.log(err));
   }

  return (
    <form onSubmit={login}>
      <input 
        type='text'
        name='username'
        placeholder='username'
        value={credentials.username}
        onChange={handleChange}
      />
      <input 
        type='password'
        name='password'
        placeholder='password'
        value={credentials.password}
        onChange={handleChange}
      />
      <button>Log in</button>
    </form>
  );
}

export default Login;
