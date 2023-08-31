/**
 * NavBar.js
 * The navigation bar at the top of the screen with my logo and links to other pages.
 * @version 2023.08.30
 */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Nav } from './NavBarElement';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import myLogo from './img/JRlogo4.png';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.location.reload();
        }
    };

    return (
        <>
            <Nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    zIndex: 9999,
                    padding: '60px',
                }}
            >
                <Link to="/" onClick={handleLogoClick}> {/* Attach onClick handler */}
                    <img
                        src={myLogo}
                        className="list-icon"
                        style={{ height: '50px', width: '53px' }}
                        alt="the letters J and R as a circle logo"
                    />
                </Link>

                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/about" style={{ textDecoration: 'none', marginRight: '20px' }}>
                        <Typography className="nav">About</Typography>
                    </Link>
                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                        <Typography className="nav">Resumé</Typography>
                    </Link>
                </Box>
            </Nav>
        </>
    );
};

export default NavBar;
