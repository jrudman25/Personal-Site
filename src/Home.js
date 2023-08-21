/**
 * Home.js
 * The main page of the site. Contains a greeting, an intro, a skills section, and a project showcase.
 * @version 2023.08.20
 */
import React, { useState, useEffect } from "react";
import { Typography, Box, Link, Paper } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email, Code, DesignServices } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import './Home.css';
import Projects from './Projects';
import skyline from './img/skyline.png'

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
                items: 'UX, UI, Websites, Web Apps, Mobile',
            },
            {
                title: 'Design & Planning Tools',
                items: 'Figma, Canva, Coolors, Marvel, Balsamiq, Lucidchart',
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
                items: 'VS Code, WebStorm, GitHub, Firebase, Framer, Better Stack',
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
                        <GitHub className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jordan-rudman/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
                    </Link>
                    <Link href="https://twitter.com/jrudman25" target="_blank" rel="noopener noreferrer">
                        <Twitter className="social-icon" sx={{ fontSize: 36, color: 'white', marginRight: '1rem' }} />
                    </Link>
                    <Link href="mailto:your.jrud25@outlook.com" >
                        <Email className="social-icon" sx={{ fontSize: 36, color: 'white' }} />
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
                        fontSize: '1.2rem',
                    }}
                >
                    Hi there! I'm Jordan, a dedicated Software Engineer and UI/UX Designer that's all about crafting
                    digital experiences that truly matter to users. Armed with a Computer Science background and an eye
                    for design, I aim to fuse aesthetics with functionality. My goal is to craft innovative solutions
                    that delight users and solve real-world problems.
                </Typography>
                <img
                    src={skyline}
                    style={{ width: '100%', height: 'auto' }}
                    className="decoration"
                    alt="a city skyline"
                />
                <Paper elevation={3} sx={{ padding: '2rem', width: '100%', marginTop: '2rem', marginBottom: '3rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '2rem' }}>
                        {skills.map((skillCategory, index) => (
                            <Box key={skillCategory.title} sx={{
                                flex: 1,
                                padding: '1rem',
                                textAlign: 'center',
                                borderRight: index === 0 ? '1px solid #03003D' : 'none' }}
                            >
                                {React.createElement(skillCategory.icon, { sx: { fontSize: '4rem', color: '#03003D' } })}
                                <Typography variant="h5" color="black" sx={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
                                    {skillCategory.title}
                                </Typography>
                                {skillCategory.subSections.map((subSection) => (
                                    <Box key={subSection.title} sx={{ marginBottom: '1rem' }}>
                                        <Typography variant="subtitle1" color="#060070" sx={{ marginBottom: '0.5rem' }}>
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
                    sx={{ marginTop: '3rem', marginBottom: '0.5rem' }}
                >
                    My Recent Work
                </Typography>
                <Typography
                    variant="h6"
                    color="white"
                    sx={{ marginTop: '0.5rem', marginBottom: '3rem' }}
                >
                    Here are some past projects I've worked on. Interested in seeing more? See my
                    {" "}
                    <a href="https://github.com/jrudman25" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                        GitHub
                    </a> or
                    {" "}
                    <a href="mailto:your.jrud25@outlook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                        email
                    </a> me.
                </Typography>
            </AnimatedBox>
            <Box sx={{ flexGrow: 1 }}>
                <Projects />
            </Box>
        </Box>
    );
};

export default Home;
