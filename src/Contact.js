import React from 'react';
import { Typography, Box } from '@mui/material';

const Contact = () => {

    return (
        <div>
            <Box sx={{ marginTop: '1rem' }}>
                <Typography
                    variant="h4"
                    sx={{ mb: 1, marginTop: 4 }}
                    textAlign="center"
                    color="white"
                >
                    Jordan Rudman
                </Typography><Typography
                variant="h4"
                sx={{ mb: 1, marginTop: 4 }}
                textAlign="center"
                color="white"
            >
                jrud25@outlook.com
            </Typography>

                <Typography
                    variant="h4"
                    sx={{ mb: 1, marginTop: 4 }}
                    textAlign="center"
                    color="white"
                >
                    Discord: jrud25#2228
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ mb: 1, marginTop: 4 }}
                    textAlign="center"
                    color="white"
                >
                    <a href="https://twitter.com/jrudman25" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                        Twitter
                    </a>
                </Typography>

            </Box>
        </div>
    );
};

export default Contact;
