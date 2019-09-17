import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios 
            .get('http://localhost:4000/api/users')
            .then(results => {
                setUsers([...results])
                console.log(results)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='user-container'>
            {console.log(users)}
        </div>
    )

}

export default Users;