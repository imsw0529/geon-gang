import React from 'react';
import people_icon from '../asset/people-icon.svg';
import Login from './Login';

function User({ onMyPageClicked }) {
    const [isLogin, setIsLogin] = React.useState(true);

    const handleMyPageClicked = () => {
        if (!isLogin) { return; }
        onMyPageClicked(0);
    };

    return (
        <div className='user' onClick={handleMyPageClicked}>
            <div style={{ display: 'flex' }}>
                {isLogin ? <p style={{ marginRight: '1vmin' }}>user name</p> : null}
                <img src={people_icon} className='people-icon' />
            </div>
            {isLogin ? null : <Login />}
        </div>
    );
};

export default User