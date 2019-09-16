import React, {useState} from 'react';

const Login = (props) => {
    const [creds, setCreds] = useState({username: '', password: ''});

    const changeHandler = event => {
        console.log(creds)
        setCreds({...creds, [event.target.name]: event.target.value})
    };

    return (
        <form onSubmit={props.loginHandler}>
            <label>Username</label>
            <input 
                name='username'
                type='text'
                value={creds.username}
                onChange={changeHandler}
                placeholder='Username'
            />
            <label>password</label>
            <input 
                name='password'
                type='password'
                value={creds.password}
                onChange={changeHandler}
                placeholder="Password"
            />

        </form>
    )
}

export default Login;