import React from "react";

function MenuBar({ selectedMenu, onSelect }) {
    return (
        <div className='menu-bar'>
            <p onClick={() => onSelect(1)} style={selectedMenu === 1 ? { backgroundColor: 'red' } : {}} >이번 주의 달성률</p>
            <p onClick={() => onSelect(2)} style={selectedMenu === 2 ? { backgroundColor: 'red' } : {}}>이번 달의 달성률</p>
            <p onClick={() => onSelect(3)} style={selectedMenu === 3 ? { backgroundColor: 'red' } : {}}>각자의 목표</p>
            <p onClick={() => onSelect(4)} style={selectedMenu === 4 ? { backgroundColor: 'red' } : {}}>오늘의 운동</p>
        </div>
    );
};

export default MenuBar  