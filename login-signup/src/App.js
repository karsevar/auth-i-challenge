import React from 'react';
import axios from 'axios';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Login from './components/Login';

function App() {
  const loginHandler = (creds, e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/login', creds)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  return (
    <div className="App">
      <div className='app-navigation'>
        <Link to='/login'>Login</Link>
      </div>
      <Route path='/login' render={props => {
        return <Login {...props} loginHandler={loginHandler} /> 
      }} />
      {/* <Route path='/signup' render={props => {
        return <Signup {...props} signupHandler={signupHandler} /> 
      }} /> */}
    </div>
  );
}

export default App;
