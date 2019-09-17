import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from 'semantic-ui-react';
import styled from 'styled-components';

const UserContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: space-around;
`;

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios 
            .get('http://localhost:4000/api/users', {withCredentials: true})
            .then(results => {
                console.log(results.data)
                setUsers([...results.data])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <UserContainer>
            { users.map(user => (
                <Card>
                    <Card.Content>
                        <Card.Header>{user.username}</Card.Header>
                    </Card.Content>
                </Card>
                ))
            }
        </UserContainer>
    )

}

export default Users;