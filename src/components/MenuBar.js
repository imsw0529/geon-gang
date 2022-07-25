import React from "react";

function MenuBar({ selectedMenu, onSelect }) {
    return (
        <div className='menu-bar'>
            <ul>
                <li onClick={() => onSelect(1)}>menu1</li>
                <li onClick={() => onSelect(2)}>menu2</li>
                <li onClick={() => onSelect(3)}>menu3</li>
                <li onClick={() => onSelect(4)}>menu4</li>
            </ul>
        </div>
    );
};

export default MenuBar  