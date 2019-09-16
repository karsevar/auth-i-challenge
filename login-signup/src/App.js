import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const loginHandler = (creds, e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/login', creds)
      .then(res => {
        console.log(res.data.message);
        setError('');
        setSuccess(res.data.message);
      })
      .catch(error => {
        console.log(error);
        setSuccess('');
        setError('Invalidate User')
      })
  }

  const signupHandler = (creds, e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/register', creds)
      .then(res => {
        console.log(res);
        setError('');
        setSuccess(`${res.data.username} has been registered`);
      })
      .catch(error => {
        console.log(error)
        setSuccess('');
        setError('Invalidate Post')
      })
  }

  return (
    <div className="App">
      <div className='app-navigation'>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
      <Route path='/login' render={props => {
        return <Login {...props} loginHandler={loginHandler} error={error} success={success} /> 
      }} />
      <Route path='/signup' render={props => {
        return <Signup {...props} signupHandler={signupHandler} error={error} success={success} /> 
      }} />
    </div>
  );
}

export default App;
