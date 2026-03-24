/**
 * Contact.jsx
 * A call-to-action section inviting visitors to get in touch.
 * @version 2026.03.22
 */
import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';

const StyledButton = styled(Button)({
    border: '2px solid rgba(255,255,255,0.6)',
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: '50px',
    padding: '10px 28px',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'white',
        color: '#03003D',
        borderColor: 'white',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    },
});

const Contact = () => {
    return (
        <Box
            sx={{
                maxWidth: '900px',
                width: '100%',
                margin: '0 auto',
                borderRadius: '12px',
                textAlign: 'center',
                padding: { xs: '2.5rem 1.5rem', md: '3rem' },
                background: 'linear-gradient(135deg, #03003D 0%, #060070 100%)',
            }}
        >
            <EmailIcon sx={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.8)', mb: 1 }} />
            <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: 'white', mb: 1 }}
            >
                Let's Work Together
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: 'rgba(255,255,255,0.75)',
                    maxWidth: '500px',
                    margin: '0 auto',
                    mb: 3,
                    lineHeight: 1.6,
                }}
            >
                Want to collaborate on a project, discuss opportunities, or just say hey?
                I'm always up for it.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <StyledButton
                    variant="outlined"
                    href="mailto:jrud25@outlook.com"
                >
                    Get in Touch
                </StyledButton>
                <StyledButton
                    variant="outlined"
                    href="https://www.linkedin.com/in/jordanrudman/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </StyledButton>
            </Box>
        </Box>
    );
};

export default Contact;
