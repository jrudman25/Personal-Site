/**
 * About.js
 * My about page. Includes information about myself as well as a photo.
 * @version 2023.09.11
 */
import React from 'react';
import { Typography, Grid } from '@mui/material';
import self from './img/myself.jpg';
import Socials from './Socials';
//import Contact from './Contact';
import AnimatedBox from './AnimatedBox';

const About = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <AnimatedBox display="flex" justifyContent="center" sx={{ ml: 2, mr:2 }} style={{ border: '1px solid white' }}>
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
                    <Typography variant="h4" color="white" sx={{ mb: 2, ml: 2, mr: 2.5 }}>
                        Hi! Thanks for checking out my site.
                    </Typography>
                    <Typography variant="h4" color="white" sx={{ mb: 2, ml: 2, mr: 2.5 }}>
                        Here's a bit about me.
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2, ml: 2, mr: 2.5 }}>
                        I'm Jordan Rudman, a new grad Software Engineer & UI/UX Designer currently based out of
                        Charleston, South Carolina. Originally from New York, I've lived all over the US and have been
                        coding since 7th grade. My passion lies at the intersection of software engineering,
                        UI/UX design, and web application development. I'm all about turning innovative ideas into
                        digital realities.
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2, ml: 2, mr: 2.5 }}>
                        I graduated from Virginia Tech in May 2023 with a BS in Computer Science and a minor in
                        Human-Computer Interaction (HCI). During my time at Virginia Tech, I dove headfirst into web
                        development. I attended workshops and honed my skills in HTML, CSS, JavaScript, React, and Git.
                        I even had the chance to learn from industry experts about accessibility engineering and best
                        design practices.
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2, ml: 2, mr: 2.5 }}>
                        I'm excited about the journey ahead and look forward to connecting with fellow tech enthusiasts and creators! I thrive on challenges and am constantly looking for
                        opportunities to learn and grow. Let's get in touch!
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
