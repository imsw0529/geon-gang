import React from 'react';
import people_icon from '../asset/people-icon.svg';
import Login from './Login';
import { useCookies } from 'react-cookie';

function User({ onMyPageClicked, id }) {
    const [userName, setUserName] = React.useState('');
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    React.useEffect(() => {
        if (cookies.user) {
            setUserName(cookies.user.name);
        }
    }, [cookies])


    const handleMyPageClicked = () => {
        if (!cookies.user) { return; }
        onMyPageClicked(0);
    };

    const handleRegistClicked = () => {
        onMyPageClicked(6);
    }

    return (
        <div className='user' onClick={handleMyPageClicked}>
            <div style={{ display: 'flex' }}>
                {cookies.user ? <p style={{ marginRight: '1rem' }}>{userName}</p> : null}
                <img src={people_icon} className='people-icon' />
            </div>
            {cookies.user ? null : <Login handleRegistClicked={handleRegistClicked} />}
        </div>
    );
};

export default User