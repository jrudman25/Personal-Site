import React from 'react';
import { Box, Typography } from '@mui/material';
import { Nav } from './NavBarElement';
import { Link } from 'react-router-dom';
import myLogo from './img/JRlogo4.png';

const NavBar = () => {
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
                    padding: '55px',
                }}
            >
                <Box style={{ flex: 1 }}>
                    <Link to="/">
                        <div style={{ height: '50px' }}>
                            <img
                                src={myLogo}
                                className="list-icon"
                                style={{ width: 'auto', height: '100%' }}
                                alt="the letters J and R as a circle logo"
                            />
                        </div>
                    </Link>
                </Box>

                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/about" style={{ textDecoration: 'none', marginRight: '20px' }}>
                        <Typography style={{ color: '#fff' }}>About</Typography>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <Typography style={{ color: '#fff' }}>Contact</Typography>
                    </Link>
                </Box>
            </Nav>
        </>
    );
};

export default NavBar;
