/**
 * Socials.js
 * Links to my social medias.
 * @version 2023.09.05
 */
import React from "react";
import {Box, Link} from "@mui/material";
import {Email, GitHub, LinkedIn, Twitter, FreeBreakfast} from "@mui/icons-material";
import './Socials.css';

const Socials = () => {
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
            <Link href="https://ko-fi.com/jrud25" >
                <FreeBreakfast className="social-icon" sx={{ fontSize: 36, color: 'white' }} />
            </Link>
        </Box>
    );
};

export default Socials;
