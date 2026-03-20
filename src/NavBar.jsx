/**
 * NavBar.js
 * The navigation bar at the top of the screen with my logo and links to other pages.
 * @version 2026.03.19
 */
import React, { useState } from 'react';
import { Typography, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Nav } from './NavBarElement';
import { Link, useLocation } from 'react-router-dom';
import myLogo from './img/JRlogo4.png';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.location.reload();
        }
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                zIndex: 9999,
                padding: isMobile ? '10px 20px' : '60px',
                pointerEvents: 'none',
                boxSizing: 'border-box',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
                <Link to="/" onClick={handleLogoClick}>
                    <img
                        src={myLogo}
                        className="list-icon"
                        style={{ height: '50px', width: '53px' }}
                        alt="the letters J and R as a circle logo"
                    />
                </Link>
            </div>

            {isMobile ? (
                <div style={{ pointerEvents: 'auto' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                        sx={{ color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{ mt: 1 }}
                    >
                        <MenuItem onClick={handleMenuClose} component={Link} to="/">
                            <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to="/about">
                            <Typography textAlign="center">About</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to="/resume">
                            <Typography textAlign="center">Resumé</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="https://dev.to/jrud25" target="_blank" rel="noopener noreferrer">
                            <Typography textAlign="center">Blog</Typography>
                        </MenuItem>
                    </Menu>
                </div>
            ) : (
                <div className="nav-links" style={{ pointerEvents: 'auto' }}>
                    <Link to="/" className="nav-link">
                        <Typography className="nav">Home</Typography>
                    </Link>
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
            )}
        </Nav>
    );
};

export default NavBar;
