import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box } from '@chakra-ui/react'

const Navigation = () => {

    return(
        <Box>
            <nav style={{textDecoration: 'none', backgroundColor: 'navy'}}>
                <ul className="" style={{display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none'}}>
                    <li><Link className="text-white font-bold" style={{textDecoration: 'none', textColor: 'white'}} to="/">Home</Link></li>
                    <li><Link className="text-white font-bold" style={{textDecoration: 'none', textColor: 'white'}} to="/about_me">About Me</Link></li>
                    <li><Link className="text-white font-bold" style={{textDecoration: 'none', textColor: 'white'}} to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <Outlet />
        </Box>
    )
}

export default Navigation;
