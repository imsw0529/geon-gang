import React from 'react';
import people_icon from '../asset/people-icon.svg';
import Login from './Login';

function User({ onMyPageClicked, id }) {
    const [userId, setUserId] = React.useState(id);
    const [userName, setUserName] = React.useState('');

    const handleMyPageClicked = () => {
        if (!userId) { return; }
        onMyPageClicked(0);
    };

    function handleUserId(inputId) {
        setUserId(inputId);
    }
    function handleUserName(inputName) {
        setUserName(inputName);
    }

    return (
        <div className='user' onClick={handleMyPageClicked}>
            <div style={{ display: 'flex' }}>
                {userId ? <p style={{ marginRight: '1rem' }}>{userName}</p> : null}
                <img src={people_icon} className='people-icon' />
            </div>
            {userId ? null : <Login handleUserId={handleUserId} handleUserName={handleUserName} />}
        </div>
    );
};

export default User