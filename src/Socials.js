/**
 * Socials.js
 * Links to my social medias.
 * @version 2023.09.07
 */
import React from "react";
import { Box, Link, SvgIcon } from "@mui/material";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import './Socials.css';

const Socials = () => {

    function SpotifyIcon(props) {
        return (
            <SvgIcon {...props}>
                <path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1
                .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1
                2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1
                8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2
                2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85
                7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0
                12 2Z" />
            </SvgIcon>
        );
    }

    function KofiIcon(props) {
        return (
            <SvgIcon {...props}>
                <path fill="currentColor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604
                0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023
                11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246
                1.453-4.011 3.976-4.011
                3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01
                3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723
                4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0
                1.913-.985 2.667-2.059 3.015z"/>
            </SvgIcon>
        );
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '2rem' }}>
            <Link href="https://github.com/jrudman25" target="_blank" rel="noopener noreferrer">
                <GitHub className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
            </Link>
            <Link href="https://www.linkedin.com/in/jordan-rudman/" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
            </Link>
            <Link href="https://twitter.com/jrudman25" target="_blank" rel="noopener noreferrer">
                <Twitter className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
            </Link>
            <Link href="mailto:your.jrud25@outlook.com" >
                <Email className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
            </Link>
            <Link href="https://ko-fi.com/jrud25" target="_blank" rel="noopener noreferrer">
                <KofiIcon className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem'  }} />
            </Link>
            <Link href="https://open.spotify.com/user/elementx25" target="_blank" rel="noopener noreferrer">
                <SpotifyIcon className="social-icon" sx={{ fontSize: 36, color: 'white' }} />
            </Link>
        </Box>
    );
};

export default Socials;
