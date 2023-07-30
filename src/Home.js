// Inside Home.js
import React, { useState, useEffect } from "react";
import { Typography, Box, Link } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import Projects from './Projects';
import { styled } from '@mui/material/styles';

const languages = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao"];

const fadeInAnimation = {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
};

const AnimatedBox = styled(Box)(({ theme }) => ({
    animation: `fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    '@keyframes fadeIn': fadeInAnimation,
}));

const Home = () => {
    const [languageIndex, setLanguageIndex] = useState(0);
    const [displayedGreeting, setDisplayedGreeting] = useState("");
    const greeting = languages[languageIndex];

    const typeGreeting = (index, currentIndex) => {
        if (currentIndex !== languageIndex) {
            return;
        }

        if (index < greeting.length) {
            setDisplayedGreeting((prevGreeting) => prevGreeting + greeting[index]);
            setTimeout(() => typeGreeting(index + 1, currentIndex), 200);
        } else {
            setTimeout(() => {
                setDisplayedGreeting("");
                setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
            }, 2000);
        }
    };

    useEffect(() => {
        let timeoutId;

        setDisplayedGreeting("");
        typeGreeting(0, languageIndex);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [languageIndex]);

    return (
        <Box style={{ height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatedBox sx={{ marginTop: '3rem', textAlign: 'center', overflow: 'hidden' }}>
                <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                        variant="h1"
                        color="white"
                        className="transition duration-500 ease-in-out text-center !font-bold !text-5xl" // Adjust the font size here
                        sx={{marginBottom:'1rem'}}
                    >
                        {`${displayedGreeting}, I'm Jordan.`}
                    </Typography>
                </div>
                <Typography
                    variant="h4"
                    color="white"
                    sx={{ marginBottom: '1rem' }} // Add some space after the tagline
                >
                    Designer, developer, & creator
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '2rem' }}>
                    <Link href="https://github.com/jrudman25" target="_blank" rel="noopener noreferrer">
                        <GitHub sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jordan-rudman/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
                    </Link>
                    <Link href="https://twitter.com/jrudman25" target="_blank" rel="noopener noreferrer">
                        <Twitter sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
                    </Link>
                    <Link href="mailto:your.jrud25@outlook.com" >
                        <Email sx={{ fontSize: 36, color: 'white' }} />
                    </Link>
                </Box>
            </AnimatedBox>
            <Projects style={{ flex: 1 }} />
        </Box>
    );
};

export default Home;
