/**
 * Home.jsx
 * The main page of the site. Contains a greeting, an intro, a skills section, and a project showcase.
 * @version 2026.03.22
 */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Typography, Box, Paper, Chip } from "@mui/material";
import { Devices, BuildCircle, Storage } from '@mui/icons-material';
import Projects from './Projects';
import Socials from './Socials';
import Contact from './Contact';
import AnimatedBox from './AnimatedBox';
import skyline from './img/skyline.png';

const languages = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao", "你好"];

const skills = [
    {
        title: 'Front End',
        icon: Devices,
        items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML/CSS', 'Responsive Design'],
    },
    {
        title: 'Back End',
        icon: Storage,
        items: ['Node.js', 'Java', 'Python', 'Go', 'SQL', 'REST APIs'],
    },
    {
        title: 'Tools & Platforms',
        icon: BuildCircle,
        items: ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Vercel'],
    },
];


const Home = () => {

    const [languageIndex, setLanguageIndex] = useState(0);
    const [displayedGreeting, setDisplayedGreeting] = useState("");
    const greeting = languages[languageIndex];
    const timeoutIds = useRef([]);

    const typeGreeting = useCallback((index, currentIndex) => {
        if (currentIndex !== languageIndex) {
            return;
        }

        if (index < greeting.length) {
            setDisplayedGreeting((prevGreeting) => prevGreeting + greeting[index]);
            const id = setTimeout(() => typeGreeting(index + 1, currentIndex), 200);
            timeoutIds.current.push(id);
        } else {
            const id = setTimeout(() => {
                setDisplayedGreeting("");
                setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
            }, 2000);
            timeoutIds.current.push(id);
        }
    }, [languageIndex, greeting]);

    useEffect(() => {
        setDisplayedGreeting("");
        timeoutIds.current = [];
        typeGreeting(0, languageIndex);

        return () => {
            timeoutIds.current.forEach(clearTimeout);
        };
    }, [languageIndex, typeGreeting]);

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatedBox sx={{ marginTop: '4rem', textAlign: 'center', overflow: 'hidden', width: '100%' }}>

                {/* Greeting — fixed height so content below doesn't shift */}
                <Box sx={{
                    height: { xs: '80px', sm: '100px', md: '130px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Typography
                        variant="h1"
                        color="white"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '4rem', md: '6rem' },
                            fontWeight: 'bold',
                            textAlign: 'center',
                            transition: 'all 500ms ease-in-out',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {`${displayedGreeting}, I'm Jordan.`}
                    </Typography>
                </Box>

                <Typography
                    variant="h3"
                    color="white"
                    sx={{ marginBottom: '1rem', marginTop: '1rem', fontSize: { xs: '2rem', md: '3rem' } }}
                >
                    Engineer. Developer. Builder.
                </Typography>
                <Socials />
                <Typography
                    variant="body1"
                    color="white"
                    sx={{
                        marginBottom: '3rem',
                        width: '800px',
                        maxWidth: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                >
                    Hi there! I'm Jordan- a Software Engineer who loves building clear, efficient, and impactful
                    solutions. With a strong Computer Science background and a thoughtful approach to problem-solving,
                    I focus on writing clean code, designing reliable systems, and creating software that improves how
                    people interact with technology.
                </Typography>
                {/* Skyline overlaps slightly into the skills Paper below */}
                <Box sx={{ position: 'relative', maxWidth: '900px', margin: '0 auto', marginBottom: '-11px', zIndex: -1 }}>
                    <Box
                        component="img"
                        src={skyline}
                        alt="a city skyline"
                        sx={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '20px',
                        background: 'linear-gradient(to bottom, transparent, #ffffff)',
                    }} />
                </Box>
                <Paper
                    elevation={0}
                    sx={{
                        width: '100%',
                        maxWidth: '900px',
                        margin: '0 auto 3rem auto',
                        borderRadius: '12px',
                        overflow: 'hidden',
                    }}
                >

                    <Box sx={{ padding: { xs: '2.5rem 1rem 2rem', md: '3rem 2rem 3rem' } }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center',
                                color: '#03003D',
                                fontWeight: 600,
                                marginBottom: '0.5rem',
                            }}
                        >
                            What I Work With
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                color: '#666',
                                marginBottom: '2rem',
                            }}
                        >
                            Technologies and tools I use day-to-day
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: { xs: '2rem', md: '0' },
                            }}
                        >
                            {skills.map((category, index) => (
                                <Box
                                    key={category.title}
                                    sx={{
                                        flex: { xs: '100%', sm: 1 },
                                        padding: { xs: '0 1rem', md: '0 1.5rem' },
                                        textAlign: 'center',
                                        borderRight: {
                                            xs: 'none',
                                            sm: index < skills.length - 1 ? '1px solid #e0e0e0' : 'none',
                                        },
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    {React.createElement(category.icon, {
                                        sx: { fontSize: '3rem', color: '#03003D', mb: 0.5 },
                                    })}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#03003D',
                                            fontWeight: 600,
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {category.title}
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '8px',
                                    }}>
                                        {category.items.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill}
                                                variant="outlined"
                                                sx={{
                                                    borderColor: '#03003D',
                                                    color: '#03003D',
                                                    fontWeight: 500,
                                                    fontSize: '0.85rem',
                                                    '&:hover': {
                                                        backgroundColor: '#03003D',
                                                        color: 'white',
                                                        borderColor: '#03003D',
                                                    },
                                                    transition: 'all 0.2s ease',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Paper>

                <Typography
                    variant="h4"
                    color="white"
                    sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}
                >
                    My Recent Work
                </Typography>
                <Typography
                    variant="h6"
                    color="white"
                    sx={{ marginTop: '0.5rem', marginBottom: '3rem', maxWidth: '700px', mx: 'auto' }}
                >
                    Here are some past projects I've worked on. Interested in seeing more? See my
                    {" "}
                    <a href="https://github.com/jrudman25" target="_blank" rel="noopener noreferrer"
                        style={{ textDecoration: 'underline' }}>
                        GitHub
                    </a> or
                    {" "}
                    <a href="mailto:jrud25@outlook.com" target="_blank" rel="noopener noreferrer"
                        style={{ textDecoration: 'underline' }}>
                        email
                    </a> me.
                </Typography>
            </AnimatedBox>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Projects />
            </Box>
            <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                <Contact />
            </Box>
        </Box>
    );
};

export default Home;
