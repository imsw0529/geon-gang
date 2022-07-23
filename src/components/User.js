import people_icon from '../asset/people-icon.svg';

function User() {
    return (
        <div style={{ display: 'flex', margin: '2vmin' }}>
            <p style={{ marginRight: '1vmin' }}>user name</p>
            <img src={people_icon} className='people-icon' />
        </div>
    );
};

export default User