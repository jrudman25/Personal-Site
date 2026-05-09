/**
 * Home.jsx
 * The main single-page layout: Hero, About, Skills, Projects, and Contact sections.
 * @version 2026.05.07
 */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Typography, Box, Paper, Chip, Button, Grid } from "@mui/material";
import { Devices, BuildCircle, Storage, ArrowForward, Hub, Terminal, DesignServices, LocationOn, School } from '@mui/icons-material';
import Projects from './Projects';
import Contact from './Contact';
import AnimatedBox from './AnimatedBox';
import self from './img/myself.jpg';
import skyline from './img/skyline.png';

const skills = [
    {
        title: 'Front End',
        icon: Devices,
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design'],
    },
    {
        title: 'Back End',
        icon: Storage,
        items: ['Go', 'Node.js', 'Java', 'Python', 'SQL', 'REST APIs', 'WebSockets'],
    },
    {
        title: 'Tools & Platforms',
        icon: BuildCircle,
        items: ['Git', 'Docker', 'Supabase', 'Firebase', 'AWS', 'Vercel'],
    },
];

const focusAreas = [
    {
        title: 'Interfaces with intent',
        icon: DesignServices,
        body: 'Design-minded front ends that make complex flows feel calm, quick, and usable.',
    },
    {
        title: 'Systems that respond',
        icon: Hub,
        body: 'Realtime, API-driven products with clear architecture from database to browser.',
    },
    {
        title: 'Shipping the whole slice',
        icon: Terminal,
        body: 'Full-stack ownership across planning, implementation, deployment, and iteration.',
    },
];

const credentials = [
    { label: 'Seattle, WA', icon: LocationOn },
    { label: 'BS Computer Science, HCI minor', icon: School },
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
            variant="h3"
            sx={{
                color: 'white',
                fontWeight: 850,
                letterSpacing: '-0.04em',
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1,
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
        setDisplayedGreeting("");
        timeoutIds.current = [];
        typeGreeting(0, languageIndex);

        return () => {
            timeoutIds.current.forEach(clearTimeout);
        };
    }, [languageIndex, typeGreeting]);

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
                    minHeight: { xs: 'auto', md: 'calc(100vh - 120px)' },
                    display: 'flex',
                    alignItems: 'center',
                    px: { xs: 2, md: 6 },
                    pt: { xs: 4, md: 2 },
                    pb: { xs: 8, md: 10 },
                    boxSizing: 'border-box',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: { xs: 260, md: 520 },
                        height: { xs: 260, md: 520 },
                        right: { xs: '-120px', md: '6%' },
                        top: { xs: '12%', md: '9%' },
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,184,77,0.2) 0%, rgba(255,184,77,0.06) 45%, transparent 70%)',
                        filter: 'blur(4px)',
                        pointerEvents: 'none',
                    }}
                />
                <Grid
                    container
                    spacing={{ xs: 5, md: 8 }}
                    alignItems="center"
                    sx={{ maxWidth: '1180px', mx: 'auto', position: 'relative', zIndex: 1 }}
                >
                    <Grid item xs={12} md={7}>
                        <Typography
                            sx={{
                                color: '#FFB84D',
                                fontSize: { xs: '0.78rem', md: '0.82rem' },
                                fontWeight: 800,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                mb: 2,
                                minHeight: '1.35rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box component="span" sx={{ minWidth: { xs: '7.4rem', md: '8.2rem' }, textAlign: 'left' }}>
                                {displayedGreeting || '\u00A0'}, I'm Jordan
                            </Box>
                            <Box component="span" sx={{ color: 'rgba(255,255,255,0.42)' }}>
                                /
                            </Box>
                            <Box component="span">
                                Creative technologist
                            </Box>
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '3.2rem', sm: '4.6rem', md: '6.8rem' },
                                fontWeight: 900,
                                letterSpacing: '-0.075em',
                                lineHeight: 0.9,
                                maxWidth: '850px',
                                mb: 3,
                            }}
                        >
                            I build full-stack products with a designer's eye and an engineer's spine.
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.76)',
                                fontSize: { xs: '1.08rem', md: '1.25rem' },
                                lineHeight: 1.75,
                                maxWidth: '690px',
                                mb: 3,
                            }}
                        >
                            I turn ambiguous ideas into shipped web applications, from realtime systems and AI-powered workflows to interfaces that feel considered at every click.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 3 }}>
                            <Button
                                variant="contained"
                                href="#projects"
                                endIcon={<ArrowForward />}
                                sx={{
                                    backgroundColor: '#FFB84D',
                                    color: '#120C02',
                                    borderRadius: '999px',
                                    px: 3,
                                    py: 1.15,
                                    fontWeight: 800,
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#FFD18A',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                View selected work
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
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
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
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                border: '1px solid rgba(255,255,255,0.14)',
                                borderRadius: '34px',
                                p: { xs: 2, md: 2.5 },
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.025))',
                                boxShadow: '0 28px 80px rgba(0,0,0,0.34)',
                                transform: { xs: 'none', md: 'rotate(2deg)' },
                            }}
                        >
                            <Box
                                component="img"
                                src={self}
                                alt="Jordan Rudman"
                                sx={{
                                    width: '100%',
                                    display: 'block',
                                    borderRadius: '24px',
                                    filter: 'saturate(0.92) contrast(1.04)',
                                }}
                            />
                            <Paper
                                elevation={0}
                                sx={{
                                    position: { xs: 'relative', md: 'absolute' },
                                    left: { md: '-34px' },
                                    bottom: { md: '28px' },
                                    mt: { xs: 2, md: 0 },
                                    p: 2,
                                    borderRadius: '18px',
                                    color: 'white',
                                    background: 'rgba(3,0,61,0.84)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    backdropFilter: 'blur(16px)',
                                }}
                            >
                                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                                    Current focus
                                </Typography>
                                <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.5, fontSize: '0.92rem' }}>
                                    Building production-ready apps that balance technical depth with human-centered interaction.
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </AnimatedBox>

            <Box sx={{ width: '100%', maxWidth: '1180px', px: { xs: 2, md: 6 }, boxSizing: 'border-box', mb: { xs: 8, md: 12 } }}>
                <Grid container spacing={2.5}>
                    {focusAreas.map((area) => (
                        <Grid item xs={12} md={4} key={area.title}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    p: { xs: 2.5, md: 3 },
                                    borderRadius: '24px',
                                    color: 'white',
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                }}
                            >
                                {React.createElement(area.icon, { sx: { color: '#FFB84D', fontSize: '2rem', mb: 2 } })}
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                                    {area.title}
                                </Typography>
                                <Typography sx={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.65 }}>
                                    {area.body}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ─── PROJECTS ─── */}
            <Box id="projects" sx={{ width: '100%', scrollMarginTop: '120px', mb: { xs: 8, md: 12 } }}>
                <AnimatedBox sx={{ maxWidth: '1180px', mx: 'auto', px: { xs: 2, md: 6 }, boxSizing: 'border-box' }}>
                    <SectionHeader eyebrow="Selected work" title="Proof that the ideas ship">
                        A curated set of projects spanning realtime infrastructure, AI-assisted workflows, collaborative media, and interactive experiences. Each card is meant to show the product thinking and technical scope quickly.
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
                    <Grid container spacing={{ xs: 3, md: 6 }} alignItems="stretch">
                        <Grid item xs={12} md={5}>
                            <SectionHeader eyebrow="Approach" title="I like the messy middle of product work">
                                The part where user needs, system constraints, and visual polish all compete for attention is where I do my best work.
                            </SectionHeader>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    p: { xs: 2.5, md: 4 },
                                    borderRadius: '28px',
                                    color: 'white',
                                    background: 'rgba(255,255,255,0.065)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                }}
                            >
                                <Typography sx={{ mb: 2, lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                                    I'm a Seattle-based software engineer, originally from New York, with a BS in Computer Science from Virginia Tech and a minor in Human-Computer Interaction.
                                </Typography>
                                <Typography sx={{ mb: 2, lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                                    I build across the stack: React and Next.js front ends, Go and Node.js services, realtime messaging, databases, auth, deployment, and the product details that make an app feel finished.
                                </Typography>
                                <Typography sx={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                                    I'm currently looking for full-stack or front-end engineering roles where I can contribute quickly, keep learning from strong teams, and build products people actually want to use.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </AnimatedBox>
            </Box>

            {/* ─── SKILLS ─── */}
            <Box id="skills" sx={{ width: '100%', scrollMarginTop: '120px', mb: { xs: 7, md: 10 } }}>
                <Box sx={{ position: 'relative', maxWidth: { xs: 'calc(100% - 40px)', md: '948px' }, margin: '0 auto', marginBottom: '-2px', zIndex: 0, opacity: 0.9 }}>
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
                        height: '18px',
                        background: 'linear-gradient(to bottom, transparent, #F6F1E8)',
                    }} />
                </Box>
                <Paper
                    elevation={0}
                    sx={{
                        width: '100%',
                        maxWidth: '980px',
                        margin: '0 auto',
                        borderRadius: '28px',
                        overflow: 'hidden',
                        background: '#F6F1E8',
                        border: '1px solid rgba(255,255,255,0.16)',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Box sx={{ padding: { xs: '2.5rem 1rem 2rem', md: '3.5rem 2.5rem' } }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center',
                                color: '#03003D',
                                fontWeight: 850,
                                letterSpacing: '-0.04em',
                                marginBottom: '0.5rem',
                            }}
                        >
                            Tools I reach for
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                color: '#666',
                                marginBottom: '2rem',
                            }}
                        >
                            A practical stack for designing, building, and shipping web products
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
            </Box>

            {/* ─── CONTACT ─── */}
            <Box id="contact" sx={{ width: '100%', mb: 5, px: { xs: 2, md: 6 }, boxSizing: 'border-box', scrollMarginTop: '120px' }}>
                <Contact />
            </Box>
        </Box>
    );
};

export default Home;
