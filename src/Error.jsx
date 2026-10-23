/**
 * Error.js
 * Handles display when users navigate to a route that doesn't exist.
 * @version 2026.10.21
 */
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const Error = () => {
    return (
        <Box sx={{ maxWidth: '760px', mx: 'auto', px: 3, py: 6, color: 'white' }}>
            <Typography component="h1" variant="h2" sx={{ mb: 3, fontWeight: 700 }} textAlign="center">
                This page wandered off.
            </Typography>
            <Typography sx={{ mb: 3, fontSize: '1.15rem', lineHeight: 1.7 }}>
                The address may be incorrect, or the page may have moved. The portfolio is still right where you left it.
            </Typography>
            <Typography sx={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                <Link component={RouterLink} to="/" underline="always" sx={{ color: '#FFB84D' }}>
                    Return to the portfolio
                </Link>
            </Typography>
        </Box>
    );
};

export default Error;
