import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import Users from './components/Users';

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

  const logoutHandler = (event) => {
    axios
      .get('http://localhost:4000/api/logout')
      .then(res => {
        console.log(res) 
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <NavBar logoutHandler={logoutHandler} />
      <Route path='/login' render={props => {
        return <Login {...props} loginHandler={loginHandler} error={error} success={success} /> 
      }} />
      <Route path='/signup' render={props => {
        return <Signup {...props} signupHandler={signupHandler} error={error} success={success} /> 
      }} />
      <Route path='/users' render={props => {
        return <Users /> 
      }} />
    </div>
  );
}

export default App;
