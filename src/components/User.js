import React from 'react';
import people_icon from '../asset/people-icon.svg';
import Login from './Login';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'

function User() {
    const [userName, setUserName] = React.useState('');
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const navigate = useNavigate();
    const name = sessionStorage.getItem('name');

    React.useEffect(() => {
        if (name) {
            setUserName(name);
        }
    }, [])

    function handleClick() {
        name && navigate(`/my_page`);
    }

    return (
        <div className='user' onClick={handleClick}>
            <div className='user-icon'>
                {name ? <p>{userName}</p> : null}
                <img src={people_icon} className='people-icon' />
            </div>
            {name ? null : <Login />}
        </div>
    );
};

export default User