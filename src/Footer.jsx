/**
 * Footer.js
 * A small footer at the bottom of the page.
 * @version 2026.10.21
 */
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
                Made with ♥ by me © {new Date().getFullYear()} |{' '}
                <Link
                    href="https://github.com/jrudman25/Personal-Site"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: 'inherit',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                        '&:hover': { color: '#FFB84D' },
                        '&:focus-visible': {
                            outline: '2px solid #FFB84D',
                            outlineOffset: '2px',
                            borderRadius: '2px',
                        },
                    }}
                >
                    Source
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
