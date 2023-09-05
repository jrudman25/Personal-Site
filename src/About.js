/**
 * About.js
 * My about page. Includes information about myself as well as a photo.
 * @version 2023.09.05
 */
import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import self from './img/myself.jpg';
import { styled } from "@mui/material/styles";
import Socials from './Socials';
import Contact from './Contact';

const fadeInAnimation = {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
};

const AnimatedBox = styled(Box)(({ theme }) => ({
    animation: `fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    '@keyframes fadeIn': fadeInAnimation,
}));

const About = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <AnimatedBox display="flex" justifyContent="center" sx={{ ml: 2 }} style={{ border: '1px solid white' }}>
                    <img
                        src={self}
                        className="list-icon"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        alt="myself sitting on a bench in front of some trees"
                    />
                </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={8}>
                <AnimatedBox>
                    <Typography variant="h4" color="white" sx={{ mb: 2 }}>
                        Hi! Thanks for checking out my site.
                    </Typography>
                    <Typography variant="h4" color="white" sx={{ mb: 2 }}>
                        Here's a bit about me.
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
                        I'm Jordan Rudman, a new grad Software Engineer & UI/UX Designer currently based out of Charleston,
                        South Carolina. Originally from New York, I've lived all over the US and have been coding since 7th grade.
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
                        I graduated from Virginia Tech in May 2023 with a BS in Computer Science and a minor in
                        Human-Computer Interaction (HCI).
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
                        I love sports, mechanical keyboards, and music - particularly rock. Add me on {" "}
                        <a href="https://open.spotify.com/user/elementx25" target="_blank" rel="noopener noreferrer"
                           style={{ textDecoration: "underline" }}>
                            Spotify
                        </a>!
                    </Typography>
                </AnimatedBox>
                <AnimatedBox display="flex" justifyContent="center">
                    <Socials />
                </AnimatedBox>
                {/*<AnimatedBox display="flex" justifyContent="center">
                    <Contact />
                </AnimatedBox>*/}
            </Grid>
        </Grid>
    );
};

export default About;
