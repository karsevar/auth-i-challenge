import React, {useState} from 'react';
import {Button, Form, Container} from 'semantic-ui-react';
import styled from 'styled-components';

const SignupForm = styled.div`
    width: 300px;
    margin: 0 auto;
`;

export const ErrorParagraph = styled.p`
    padding: 16px;
    background-color: #ffb7b7;
    color: red;
    border: solid 1px #f39595;
    border-radius: 4px;
    max-width: 700px;
    margin: 16px auto;
`;

export const SuccessParagraph = styled.p`
    padding: 16px;
    background-color: lightgreen;
    color: darkgreen;
    border: solid 1px darkgreen;
    border-radius: 4px;
    max-width: 700px;
    margin: 16px auto;
`;

const Signup = (props) => {
    const [creds, setCreds] = useState({username: '', password: ''});

    const changeHandler = event => {
        console.log(creds)
        setCreds({...creds, [event.target.name]: event.target.value})
    };

    return (
        <>
            <SignupForm>
                <Container textAlign='center'>
                        <Form onSubmit={e => props.signupHandler(creds, e)}>
                            <Form.Field>
                                <label>Username</label>
                                <input
                                    name='username'
                                    type='text'
                                    value={creds.username}
                                    onChange={changeHandler}
                                    placeholder='Username'
                                />
                            </Form.Field> 
                            <Form.Field>
                                <label>Password</label>
                                <input
                                    name='password'
                                    type='password'
                                    value={creds.password}
                                    onChange={changeHandler}
                                    placeholder="Password"
                                />
                            </Form.Field>
                            <Button>Signup!</Button>
                        </Form>
                </Container>
            </SignupForm>
            {props.success && <SuccessParagraph>{props.success}</SuccessParagraph>}
            {props.error && <ErrorParagraph>{props.error}</ErrorParagraph>}
        </>
    )
}

export default Signup;