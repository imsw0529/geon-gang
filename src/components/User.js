import React from 'react';
import people_icon from '../asset/people-icon.svg';
import Login from './Login';

function User() {
    const [isLogin, setIsLogin] = React.useState(false);

    return (
        <div className='user'>
            <div style={{ display: 'flex' }}>
                {isLogin ? <p style={{ marginRight: '1vmin' }}>user name</p> : null}
                <img src={people_icon} className='people-icon' />
            </div>
            {isLogin ? null : <Login />}
        </div>
    );
};

export default User