/**
 * Home.js
 * The main page of the site. Contains a greeting, an intro, a skills section, and a project showcase.
 * @version 2023.09.11
 */
import React, { useState, useEffect } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { Code, DesignServices } from '@mui/icons-material';
import Projects from './Projects';
import Socials from './Socials';
//import Contact from './Contact';
import AnimatedBox from './AnimatedBox';
import skyline from './img/skyline.png';

const languages = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao"];

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
    }, [languageIndex, typeGreeting()]);

    return (
        <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatedBox sx={{ marginTop: '4rem', textAlign: 'center', overflow: 'hidden' }}>
                <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                        variant="h1" // this has no effect on font size, see !test-#xl in className below
                        color="white"
                        className="transition duration-500 ease-in-out text-center !font-bold !text-7xl"
                        sx={{
                            fontSize: { xs: '4rem', sm: '6rem' },
                            marginBottom: '1rem',
                        }}
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
                <Socials />
                <Typography
                    variant="body1"
                    color="white"
                    sx={{
                        marginBottom: '3rem',
                        width: '800px',
                        maxWidth: '100%',
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
                    style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
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
                    <a href="https://github.com/jrudman25" target="_blank" rel="noopener noreferrer"
                       style={{ textDecoration: "underline" }}>
                        GitHub
                    </a> or
                    {" "}
                    <a href="mailto:your.jrud25@outlook.com" target="_blank" rel="noopener noreferrer"
                       style={{ textDecoration: "underline" }}>
                        email
                    </a> me.
                </Typography>
            </AnimatedBox>
            <Box sx={{ flexGrow: 1 }}>
                <Projects />
            </Box>
            {/*<Box >
                <Contact />
            </Box>*/}
        </Box>
    );
};

export default Home;
