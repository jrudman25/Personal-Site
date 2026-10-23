/**
 * Home.jsx
 * The main single-page layout: Hero, About, Skills, Projects, and Contact sections.
 * @version 2026.10.21
 */
import React, { useState, useEffect, useCallback, useRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowForward from '@mui/icons-material/ArrowForward';
import Terminal from '@mui/icons-material/Terminal';
import LocationOn from '@mui/icons-material/LocationOn';
import School from '@mui/icons-material/School';
import GitHub from '@mui/icons-material/GitHub';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import AnimatedBox from './AnimatedBox';
import Loading from './Loading';
import self from './img/myself.jpg';
import scrollToSection from './scrollToSection';

const credentials = [
    { label: 'Seattle, WA, USA', icon: LocationOn },
    { label: 'BS Computer Science + HCI minor, Virginia Tech', icon: School },
    { label: 'React, Next.js, Go, TypeScript', icon: Terminal },
];

const languages = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao", "你好"];

const SectionHeader = ({ eyebrow, title, children, align = 'left' }) => (
    <Box sx={{ textAlign: { xs: 'center', md: align }, mb: { xs: 3, md: 4 } }}>
        <Typography
            sx={{
                color: '#FFB84D',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                mb: 1,
            }}
        >
            {eyebrow}
        </Typography>
        <Typography
            component="h2"
            variant="h3"
            sx={{
                color: 'white',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.12,
                mb: 1.5,
            }}
        >
            {title}
        </Typography>
        <Typography
            sx={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: { xs: '1rem', md: '1.08rem' },
                lineHeight: 1.7,
                maxWidth: '700px',
                mx: { xs: 'auto', md: align === 'center' ? 'auto' : 0 },
            }}
        >
            {children}
        </Typography>
    </Box>
);

const Home = () => {
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
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
            const id = setTimeout(() => typeGreeting(index + 1, currentIndex), 120);
            timeoutIds.current.push(id);
        } else {
            const id = setTimeout(() => {
                setDisplayedGreeting("");
                setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
            }, 1800);
            timeoutIds.current.push(id);
        }
    }, [languageIndex, greeting]);

    useEffect(() => {
        if (prefersReducedMotion) {
            setDisplayedGreeting('Hello');
            return undefined;
        }

        setDisplayedGreeting("");
        timeoutIds.current = [];
        typeGreeting(0, languageIndex);

        return () => {
            timeoutIds.current.forEach(clearTimeout);
        };
    }, [languageIndex, prefersReducedMotion, typeGreeting]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                overflow: 'hidden',
            }}
        >

            {/* ─── HERO ─── */}
            <AnimatedBox
                id="hero"
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1180px',
                    mx: 'auto',
                    px: { xs: 2, md: 6 },
                    pt: { xs: 2, md: 3 },
                    pb: { xs: 4, md: 5 },
                    boxSizing: 'border-box',
                    animation: 'none',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: { xs: 200, md: 340 },
                        height: { xs: 200, md: 340 },
                        right: { xs: '-100px', md: '6%' },
                        top: { xs: '0%', md: '0%' },
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,184,77,0.14) 0%, rgba(255,184,77,0.04) 45%, transparent 70%)',
                        filter: 'blur(4px)',
                        pointerEvents: 'none',
                    }}
                />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 7fr) minmax(0, 5fr)' },
                        gridTemplateAreas: {
                            xs: '"copy" "portrait"',
                            md: '"copy portrait"',
                        },
                        columnGap: { xs: 0, md: 6 },
                        rowGap: 5,
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '1180px',
                        mx: 'auto',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Box sx={{ gridArea: 'copy', minWidth: 0 }}>
                        <Typography
                            sx={{
                                color: '#FFB84D',
                                fontSize: { xs: '0.72rem', sm: '0.78rem', md: '0.82rem' },
                                fontWeight: 800,
                                letterSpacing: { xs: '0.13em', sm: '0.18em', md: '0.2em' },
                                textTransform: 'uppercase',
                                mb: 2,
                                minHeight: '1.35rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                maxWidth: '100%',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    display: 'inline-grid',
                                    gridTemplateAreas: '"text"',
                                    flex: '0 0 auto',
                                    textAlign: 'left',
                                }}
                            >
                                <Box component="span" sx={{ gridArea: 'text', visibility: 'hidden' }}>
                                    Bonjour, I'm Jordan
                                </Box>
                                <Box component="span" sx={{ gridArea: 'text' }}>
                                    {displayedGreeting || '\u00A0'}, I'm Jordan
                                </Box>
                            </Box>
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '2rem', sm: '3.4rem', md: '3.5rem' },
                                fontWeight: 700,
                                letterSpacing: '-0.035em',
                                lineHeight: 1.08,
                                maxWidth: '820px',
                                textWrap: 'balance',
                                mb: 2,
                            }}
                        >
                            Thoughtful software. From interface to infrastructure.
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.76)',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                lineHeight: 1.65,
                                maxWidth: '620px',
                                mb: 2,
                            }}
                        >
                            I'm a software engineer building interactive applications, real-time systems, and AI-powered tools.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                href="#projects"
                                onClick={(event) => {
                                    event.preventDefault();
                                    scrollToSection('projects', prefersReducedMotion);
                                }}
                                endIcon={<ArrowForward />}
                                sx={{
                                    backgroundColor: '#FFB84D',
                                    color: '#120C02',
                                    borderRadius: '999px',
                                    px: 3,
                                    py: 1.15,
                                    fontWeight: 800,
                                    textTransform: 'none',
                                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                                    '&:hover': {
                                        backgroundColor: '#FFD18A',
                                        transform: 'translateY(-2px)',
                                    },
                                    '@media (prefers-reduced-motion: reduce)': {
                                        transition: 'none',
                                        '&:hover': { transform: 'none' },
                                    },
                                }}
                            >
                                View selected work
                            </Button>
                            <Button
                                variant="outlined"
                                href="https://github.com/jrudman25"
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<GitHub />}
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.24)',
                                    borderRadius: '999px',
                                    px: 3,
                                    py: 1.15,
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: 'rgba(255,255,255,0.7)',
                                        backgroundColor: 'rgba(255,255,255,0.08)',
                                    },
                                }}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                href="mailto:jrud25@outlook.com"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.24)',
                                    borderRadius: '999px',
                                    px: 3,
                                    py: 1.15,
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: 'rgba(255,255,255,0.7)',
                                        backgroundColor: 'rgba(255,255,255,0.08)',
                                    },
                                }}
                            >
                                Start a conversation
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                            {credentials.map((item) => (
                                <Chip
                                    key={item.label}
                                    icon={React.createElement(item.icon, { sx: { color: 'rgba(255,255,255,0.72) !important' } })}
                                    label={item.label}
                                    sx={{
                                        color: 'rgba(255,255,255,0.78)',
                                        backgroundColor: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(12px)',
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            gridArea: 'portrait',
                            position: 'relative',
                            border: '1px solid rgba(255,255,255,0.14)',
                            borderRadius: '34px',
                            p: { xs: 2, md: 2.5 },
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.025))',
                            boxShadow: '0 28px 80px rgba(0,0,0,0.34)',
                            transform: { xs: 'none', md: 'scale(0.8) rotate(2deg)' },
                        }}
                    >
                        <Loading />
                        <Box
                            component="img"
                            src={self}
                            width={1748}
                            height={2003}
                            loading="eager"
                            alt="Jordan Rudman"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                aspectRatio: '1748 / 2003',
                                display: 'block',
                                borderRadius: '24px',
                                filter: 'saturate(0.92) contrast(1.04)',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        />
                        <Paper
                            elevation={0}
                            sx={{
                                position: { xs: 'relative', md: 'absolute' },
                                left: { md: '32px' },
                                right: { md: '32px' },
                                bottom: { md: '32px' },
                                mt: { xs: 2, md: 0 },
                                p: 2,
                                borderRadius: '18px',
                                color: 'white',
                                background: 'rgba(3,0,61,0.84)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                backdropFilter: 'blur(16px)',
                                zIndex: 3,
                            }}
                        >
                            <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                                How I think
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.5, fontSize: '0.92rem' }}>
                                A computer science foundation, an HCI perspective, and a habit of asking how things could work better.
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </AnimatedBox>

            {/* ─── PROJECTS ─── */}
            <Box id="projects" sx={{ width: '100%', scrollMarginTop: '120px', mb: { xs: 8, md: 12 } }}>
                <AnimatedBox sx={{ maxWidth: '1180px', mx: 'auto', px: { xs: 2, md: 6 }, boxSizing: 'border-box' }}>
                    <SectionHeader eyebrow="Selected work" title="Proof that the ideas ship">
                        Selected projects across real-time systems, AI workflows, and interactive experiences.
                    </SectionHeader>
                </AnimatedBox>
                <Projects />
            </Box>

            {/* ─── ABOUT ─── */}
            <Box
                id="about"
                sx={{
                    width: '100%',
                    maxWidth: '1180px',
                    margin: { xs: '0 auto 5rem auto', md: '0 auto 7rem auto' },
                    px: { xs: 2, md: 6 },
                    boxSizing: 'border-box',
                    scrollMarginTop: '120px',
                }}
            >
                <AnimatedBox>
                    <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-start">
                        <Grid item xs={12} md={5}>
                            <SectionHeader eyebrow="Approach" title="I like the messy middle of product work">
                                The part where user needs, system constraints, and visual polish all compete for attention is where I do my best work.
                            </SectionHeader>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Paper
                                elevation={0}
                                sx={{
                                    boxSizing: 'border-box',
                                    p: { xs: 2.5, md: 4 },
                                    borderRadius: '28px',
                                    color: 'white',
                                    background: 'rgba(255,255,255,0.065)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                }}
                            >
                                <Typography sx={{ mb: 2, lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                                    I'm Jordan Rudman, a Seattle-based software engineer with a BS in Computer Science and a minor in Human-Computer Interaction from Virginia Tech.
                                </Typography>
                                <Typography sx={{ mb: 2, lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                                    I work across interfaces and services: React and Next.js, Go and Node.js, real-time messaging, databases, authentication, and deployment.
                                </Typography>
                                <Typography sx={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                                    I'm currently looking for software engineering roles where I can contribute quickly, keep learning from strong teams, and build products people actually want to use.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </AnimatedBox>
            </Box>

            {/* ─── SKILLS ─── */}
            <Box id="skills" sx={{ width: '100%', scrollMarginTop: '120px', mb: { xs: 7, md: 10 } }}>
                <Skills />
            </Box>

            {/* ─── CONTACT ─── */}
            <Box id="contact" sx={{ width: '100%', mb: 5, px: { xs: 2, md: 6 }, boxSizing: 'border-box', scrollMarginTop: '120px' }}>
                <Contact />
            </Box>
        </Box>
    );
};

export default Home;
