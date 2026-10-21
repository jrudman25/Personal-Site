/**
 * Footer.js
 * A small footer at the bottom of the page.
 * @version 2023.08.20
 */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Socials from './Socials';

const Footer = () => {

    return (
        <Box
            component="footer"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 1 }}
        >
            <Socials />
            <Typography
                sx={{ color: 'white', marginBottom: '0.5rem', textAlign: 'center' }}
            >
                Made with ♥ by me © {new Date().getFullYear()} | <a href="https://github.com/jrudman25/Personal-Site" target="_blank" rel="noopener noreferrer">Source</a>
            </Typography>
        </Box>
    );
};

export default Footer;
