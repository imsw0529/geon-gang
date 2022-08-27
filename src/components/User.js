import React, { useCallback, useState } from 'react';
import people_icon from '../asset/people-icon.svg';
import Login from './Login';
import { useNavigate } from 'react-router-dom'

function User() {
    const name = sessionStorage.getItem('name');

    const [userName, setUserName] = React.useState(name);
    const [, updateState] = useState();
    const forceupdate = useCallback(() => updateState({}), []);

    const navigate = useNavigate();

    function handleClick() {
        name && navigate(`/my_page`);
    }

    return (
        <div className='user' onClick={handleClick}>
            <div className='user-icon'>
                {name ? <p>{userName}</p> : null}
                <img src={people_icon} className='people-icon' />
            </div>
            {name ? null : <Login forceupdate={forceupdate} />}
        </div>
    );
};

export default User