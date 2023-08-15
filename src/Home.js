import React, { useState, useEffect } from "react";
import { Typography, Box, Link, Paper } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email, Code, DesignServices } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Projects from './Projects';

const languages = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao"];

const fadeInAnimation = {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
};

const AnimatedBox = styled(Box)(({ theme }) => ({
    animation: `fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    '@keyframes fadeIn': fadeInAnimation,
}));

const skills = [
    {
        title: 'Designer',
        icon: DesignServices,
        subSections: [
            {
                title: 'Things I Enjoy Designing',
                items: 'UX, UI, Web, Apps, Logos',
            },
            {
                title: 'Design & Planning Tools',
                items: 'Figma, Canva, Coolors, Lucidchart',
            },
        ],
    },
    {
        title: 'Developer',
        icon: Code,
        subSections: [
            {
                title: 'Languages I Speak',
                items: 'HTML5, CSS3/Tailwind, JavaScript/React, Java, Python',
            },
            {
                title: 'Dev Tools',
                items: 'VS Code, WebStorm, GitHub, Firebase, Framer',
            },
        ],
    },
];

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
            <AnimatedBox sx={{ marginTop: '5rem', textAlign: 'center', overflow: 'hidden' }}>
                <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                        variant="h1" // this has no effect on font size, see !test-#xl in className below
                        color="white"
                        className="transition duration-500 ease-in-out text-center !font-bold !text-7xl"
                        sx={{marginBottom:'1rem'}}
                    >
                        {`${displayedGreeting}, I'm Jordan.`}
                    </Typography>
                </div>
                <Typography
                    variant="h3"
                    color="white"
                    sx={{ marginBottom: '1rem' }}
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
                <Typography
                    variant="body1"
                    color="white"
                    sx={{
                        marginBottom: '3rem',
                        maxWidth: '800px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: '1.2rem', // Adjust the font size as needed
                    }}
                >
                    Hi there! I'm Jordan, a passionate Software Engineer and UI/UX Designer with a mission to create
                    meaningful and user-centric digital experiences. With a background in Computer Science and a knack
                    for design, I bridge the gap between aesthetics and functionality. My goal is to craft innovative
                    solutions that delight users and solve real-world problems.
                </Typography>

                <Paper elevation={3} sx={{ padding: '2rem', width: '100%', maxWidth: '800px', marginBottom: '3rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '2rem' }}>
                        {skills.map((skillCategory) => (
                            <Box key={skillCategory.title} sx={{ flex: 1, padding: '1rem', textAlign: 'center' }}>
                                {React.createElement(skillCategory.icon, { sx: { fontSize: '4rem', color: '#03003D' } })}
                                <Typography variant="h5" color="black" sx={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
                                    {skillCategory.title}
                                </Typography>
                                {skillCategory.subSections.map((subSection) => (
                                    <Box key={subSection.title} sx={{ marginBottom: '1rem' }}>
                                        <Typography variant="subtitle1" color="primary" sx={{ marginBottom: '0.5rem' }}>
                                            {subSection.title}
                                        </Typography>
                                        {subSection.title === 'Things I Enjoy Designing' ||
                                        subSection.title === 'Languages I Speak' ? (
                                            <Typography variant="body2" color="black">
                                                {subSection.items.split(', ').join(', ')}
                                            </Typography>
                                        ) : (
                                            subSection.items.split(', ').map((item) => (
                                                <Typography variant="body2" color="black" key={item}>
                                                    {item}
                                                </Typography>
                                            ))
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Paper>
                <Typography
                    variant="h4"
                    color="white"
                    sx={{ marginTop: '3rem', marginBottom: '1rem' }}
                >
                Check out some of my projects below:
            </Typography>
            </AnimatedBox>
            <Projects style={{ flex: 1 }} />
        </Box>
    );
};

export default Home;
