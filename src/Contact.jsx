/**
 * Contact.jsx
 * A call-to-action section inviting visitors to get in touch.
 * @version 2026.05.07
 */
import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const StyledButton = styled(Button)({
    border: '1px solid rgba(255,255,255,0.28)',
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: '999px',
    padding: '10px 28px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.12)',
        borderColor: 'rgba(255,255,255,0.62)',
        transform: 'translateY(-2px)',
    },
});

const Contact = () => {
    return (
        <Box
            sx={{
                maxWidth: '900px',
                width: '100%',
                margin: '0 auto',
                borderRadius: '32px',
                padding: { xs: '2.5rem 1.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, rgba(255,184,77,0.16) 0%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0.035) 100%)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'white',
                boxSizing: 'border-box',
            }}
        >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, gap: { xs: 3, md: 5 }, alignItems: 'center' }}>
                <Box>
                    <EmailIcon sx={{ fontSize: '2.3rem', color: '#FFB84D', mb: 1 }} />
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 850, letterSpacing: '-0.04em', color: 'white', mb: 1 }}
                    >
                        Have a team, role, or product problem I could help with?
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255,255,255,0.75)',
                            maxWidth: '560px',
                            lineHeight: 1.7,
                        }}
                    >
                        I am most interested in full-stack and front-end engineering roles where strong product taste, clean systems, and thoughtful interfaces all matter.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'flex-start', md: 'center' },
                        gap: 1.5,
                        flexWrap: 'wrap',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'flex-start', md: 'center' },
                            gap: 1.5,
                            flexWrap: 'wrap',
                            width: '100%',
                        }}
                    >
                        <StyledButton
                            variant="outlined"
                            href="mailto:jrud25@outlook.com"
                        >
                            Email Jordan
                        </StyledButton>
                        <StyledButton
                            variant="outlined"
                            href="https://www.linkedin.com/in/jordan-rudman/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </StyledButton>
                    </Box>
                    <StyledButton
                        variant="outlined"
                        href="/Jordan-Rudman-Software-Engineer-Resume.pdf"
                        download
                        startIcon={<DownloadIcon />}
                    >
                        Download Resume
                    </StyledButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
