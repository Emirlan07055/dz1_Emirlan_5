import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return <>
        <ul>
            <li>
                <NavLink to="/">Main page</NavLink>
            </li>
            <li>
                <NavLink to="posts">posts page</NavLink>
            </li>
            <li>
                <NavLink to="about">about page</NavLink>
            </li>
            <li>
                <NavLink to="triple">triple page</NavLink>
            </li>
        </ul>
    </>
};

export default NavBar;