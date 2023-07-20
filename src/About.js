import React from 'react';
import { Typography, Box } from '@mui/material';
import self from './img/myself.jpg';

const About = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginLeft: '8rem' }}>
            <div style={{ flex: '0 0 40%' }}>
                <img
                    src={self}
                    className="list-icon"
                    style={{ width: 'auto', height: '550px' }}
                    alt="a picture of myself sitting on a bench in front of some trees"
                />
            </div>
            <div style={{ flex: '1' }}>
                <Box sx={{ marginTop: '1rem', marginRight: '7rem' }}>
                    <Typography
                        variant="h4"
                        sx={{ mb: 1, marginTop: 4 }}
                        color="white"
                    >
                        Hi! Thanks for checking out my site.
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ mb: 1, marginTop: 1, marginBottom: 3 }}
                        color="white"
                    >
                        Here's a bit about me.
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ mb: 1 }}
                        color="white"
                    >
                        I'm Jordan Rudman, a new grad Software Engineer/UX Designer currently based out of Charleston,
                        South Carolina.
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ mb: 1 }}
                        color="white"
                    >
                        Originally from New York, I've lived all over the US and have been coding since 7th grade.
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ mb: 1 }}
                        color="white"
                    >
                        I graduated from Virginia Tech in May 2023 with a BS in Computer Science and a minor in
                        Human-Computer Interaction (HCI).
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ mb: 1 }}
                        color="white"
                    >
                        I love sports, mechanical keyboards, and music- particularly rock. Add me on {" "}
                        <a href="https://open.spotify.com/user/elementx25" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                            Spotify
                        </a>!
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default About;
