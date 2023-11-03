/**
 * NavBar.js
 * The navigation bar at the top of the screen with my logo and links to other pages.
 * @version 2023.11.03
 */
import React from 'react';
import { Typography } from '@mui/material';
import { Nav } from './NavBarElement';
import { Link, useLocation } from 'react-router-dom';
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
                    pointerEvents: 'none',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" onClick={handleLogoClick}>
                        <img
                            src={myLogo}
                            className="list-icon"
                            style={{ height: '50px', width: '53px', pointerEvents: 'auto' }}
                            alt="the letters J and R as a circle logo"
                        />
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/about" className="nav-link">
                        <Typography className="nav">About</Typography>
                    </Link>
                    <Link to="/resume" className="nav-link">
                        <Typography className="nav">Resumé</Typography>
                    </Link>
                    <a href="https://dev.to/jrud25" target="_blank" rel="noopener noreferrer" className="nav-link">
                        <Typography className="nav">Blog</Typography>
                    </a>
                </div>
            </Nav>
        </>
    );
};

export default NavBar;
