/**
 * Error.js
 * Handles display when users navigate to a route that doesn't exist.
 * @version 2026.03.19
 */
import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Box sx={{ maxWidth: '760px', mx: 'auto', px: 3, py: 6, color: 'white' }}>
            <Typography component="h1" variant="h2" sx={{ mb: 3, fontWeight: 850 }} textAlign="center">
                Oops!
            </Typography>
            <Typography sx={{ mb: 2, fontSize: '1.15rem', lineHeight: 1.7 }}>
                We couldn't find the page you were looking for. This is either because:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <Typography component="li" sx={{ mb: 1, lineHeight: 1.7 }}>
                    There is an error in the URL entered into your web browser. Please check the URL and try again.
                </Typography>
                <Typography component="li" sx={{ lineHeight: 1.7 }}>
                    The page you are looking for has been moved or deleted.
                </Typography>
            </Box>
            <Typography sx={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                You can return to the homepage by clicking{' '}
                <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>here</Link>.
            </Typography>
        </Box>
    );
};

export default Error;
