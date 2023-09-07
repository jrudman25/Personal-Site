/**
 * Contact.js
 * My about page. Includes information about myself as well as a photo.
 * @version 2023.09.05
 */
import React from 'react';
import { Typography, Grid, Paper, Button, Box } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    border: `2px solid #03003D`,
    color: '#03003D',
    backgroundColor: 'transparent',
    borderRadius: '50px',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: '#03003D',
        color: '#fff',
        border: `2px solid #fff`,
    },
}));

const Contact = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={12} md={8}>
                <Paper elevation={3} sx={{ padding: '2rem', display: 'flex', alignItems: 'center' }}>
                    <Box flex={1} mr={12}>
                        <Typography variant="h5" gutterBottom noWrap fontWeight="bold">
                            Contact me
                        </Typography>
                    </Box>
                    <Box flex={3} mr={12}>
                        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                            Want to collaborate on a project, discuss employment opportunities, or just say hey? I'm
                            always up for it. Let's chat.
                        </Typography>
                    </Box>
                    <Box flex={1} display="flex" alignItems="center">
                        <StyledButton
                            variant="outlined"
                            href="#"
                            sx={{ mt: 2, height: 'fit-content' }}
                        >
                            <Typography variant="body1" noWrap>
                                Let's do it
                            </Typography>
                        </StyledButton>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Contact;
