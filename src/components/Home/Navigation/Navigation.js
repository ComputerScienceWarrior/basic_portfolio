import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {

    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about_me">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;
