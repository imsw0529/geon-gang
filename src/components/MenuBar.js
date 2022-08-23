import React from "react";
import { NavLink } from 'react-router-dom';

function MenuBar({ selectedMenu, onSelect }) {
    return (
        <div className='menu-bar'>
            <NavLink className={({ isActive }) => isActive ? "active-menu" : ""} to="/this_week" >이번 주의 달성률</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-menu" : ""} to="/this_month" >이번 달의 달성률</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-menu" : ""} to="/people_goal" >각자의 목표</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-menu" : ""} to="/today" >오늘의 운동</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-menu" : ""} to="/my_record" >나의 운동</NavLink>
        </div>
    );
};

export default MenuBar  