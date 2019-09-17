import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function NavBar (props) {
    return (
        <Menu secondary>
            <Menu.Item 
                as={Link}
                to='/users'
                name='Users'
            />
            <Menu.Item 
                as={Link}
                to='/login'
                name='Login'
            />
            <Menu.Item 
                as={Link}
                to='/signup'
                name='Signup'
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='Logout'
                    onClick={props.logoutHandler}
                />
            </Menu.Menu>
        </Menu>
    )
}

export default NavBar;