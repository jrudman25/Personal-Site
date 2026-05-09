/**
 * Projects.jsx
 * A responsive card grid showcasing curated projects.
 * @version 2026.05.07
 */
import React from 'react';
import { Box, Chip, Typography, styled } from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';

const Card = styled(Box)(({ theme }) => ({
    borderRadius: '28px',
    overflow: 'hidden',
    position: 'relative',
    minHeight: '430px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.035) 100%)',
    border: '1px solid rgba(255,255,255,0.12)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 18px 42px rgba(0,0,0,0.28)',
        borderColor: 'rgba(255,255,255,0.28)',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '420px',
    },
}));

const Visual = styled(Box)({
    position: 'relative',
    minHeight: '170px',
    padding: '1.25rem',
    overflow: 'hidden',
});

const Glow = styled('div')({
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.95,
});

const Overlay = styled('div')({
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '1.5rem',
    boxSizing: 'border-box',
    flexGrow: 1,
});

const LinkButton = styled('a')({
    padding: '7px 14px',
    border: '1px solid rgba(255,255,255,0.18)',
    color: 'rgba(255,255,255,0.88)',
    borderRadius: '999px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.85rem',
    fontWeight: 700,
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.12)',
        color: 'white',
        borderColor: 'rgba(255,255,255,0.42)',
    },
});

const projectData = [
    {
        title: 'LivePulse',
        description: 'A high-performance, real-time engagement platform with chat rooms for live events, powered by WebSockets and a Go backend.',
        technologies: ['Go', 'Next.js', 'TypeScript', 'WebSockets', 'Upstash Redis', 'Docker', 'Clerk', 'Tailwind CSS'],
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        accent: 'linear-gradient(135deg, rgba(80,181,255,0.55) 0%, rgba(116,88,255,0.35) 100%)',
        eyebrow: 'Featured product build',
        role: 'Full-stack architecture, realtime UX, backend systems',
        outcome: 'Realtime engagement platform',
        highlight: 'Designed for live-event energy with fast messaging and scalable room-based interaction.',
        link: 'https://livepulse-hq.vercel.app/',
        repo: 'https://github.com/jrudman25/LivePulse',
    },
    {
        title: 'Guidepost',
        description: 'An AI-powered job search manager that finds listings matching your resume, scores them, and tracks your applications.',
        technologies: ['Next.js', 'TypeScript', 'Gemini API', 'Supabase', 'Tailwind CSS', 'Shadcn UI'],
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
        accent: 'linear-gradient(135deg, rgba(117,220,255,0.45) 0%, rgba(255,255,255,0.14) 100%)',
        eyebrow: 'AI-assisted workflow',
        role: 'Product design, AI integration, full-stack implementation',
        outcome: 'Job-search operating system',
        highlight: 'Built to reduce job-search friction by turning discovery, ranking, and tracking into one flow.',
        link: 'https://guidepost-ai.vercel.app/',
        repo: 'https://github.com/jrudman25/guidepost',
    },
    {
        title: 'PixLog',
        description: 'A collaborative photo timeline app. Create shared timelines, invite friends, and upload photos sorted by date using EXIF metadata.',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'EXIF', 'Nominatim', 'Vercel'],
        background: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
        accent: 'linear-gradient(135deg, rgba(255,121,198,0.4) 0%, rgba(69,255,204,0.3) 100%)',
        eyebrow: 'Collaborative consumer app',
        role: 'App concept, shared data model, media experience',
        outcome: 'Shared memory timeline',
        highlight: 'Focused on making shared memories feel structured, social, and easy to revisit.',
        link: 'https://pix-log.vercel.app/',
        repo: 'https://github.com/jrudman25/PixLog',
    },
    {
        title: 'TuneTeaser',
        description: 'A "Name That Tune" style game where you test your music knowledge against your own Spotify playlists.',
        technologies: ['React', 'TypeScript', 'Spotify API', 'iTunes API', 'MUI', 'Firebase'],
        background: 'linear-gradient(135deg, #1db954 0%, #191414 100%)',
        accent: 'linear-gradient(135deg, rgba(29,185,84,0.4) 0%, rgba(255,255,255,0.1) 100%)',
        eyebrow: 'Playful side project',
        role: 'Game design, API orchestration, frontend polish',
        outcome: 'Spotify playlist game',
        highlight: 'A music-first experience built to feel competitive, familiar, and a little chaotic in the best way.',
        link: 'https://tuneteaser.web.app/',
        repo: 'https://github.com/jrudman25/TuneTeaser',
    },
    {
        title: 'AlgoVis',
        description: 'An interactive visualization tool for sorting algorithms, rebuilt with modern tooling and smooth animations.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'TanStack Router'],
        background: 'linear-gradient(135deg, #ff6b6b 0%, #556270 100%)',
        accent: 'linear-gradient(135deg, rgba(255,107,107,0.45) 0%, rgba(255,210,63,0.25) 100%)',
        eyebrow: 'Interactive learning tool',
        role: 'Animation system, information design, rebuild',
        outcome: 'Algorithm visualization',
        highlight: 'Took a classic CS concept and made it more intuitive through motion and cleaner interaction.',
        link: 'https://algovis-e25f5.web.app/',
        repo: 'https://github.com/jrudman25/AlgoVis',
    },
    {
        title: 'ScoreSeeker',
        description: 'A sports statistics platform for searching teams, viewing schedules, and playing dynamic audio based on match outcomes.',
        technologies: ['Next.js', 'React', 'TheSportsDB API', 'Tone.js', 'MUI', 'Jest'],
        background: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)',
        accent: 'linear-gradient(135deg, rgba(233,69,96,0.45) 0%, rgba(255,180,77,0.22) 100%)',
        eyebrow: 'Data + sound experiment',
        role: 'Interactive data UI, audio feedback, API integration',
        outcome: 'Sports data exploration',
        highlight: 'An example of mixing sports data with playful audiovisual feedback to make stats browsing more alive.',
        link: 'https://scoreseeker.netlify.app/',
        repo: 'https://github.com/jrudman25/ScoreSeeker',
    },
];

const Projects = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
                gap: 3,
                width: '100%',
                maxWidth: '1180px',
                margin: '0 auto',
                px: { xs: 2, md: 6 },
                boxSizing: 'border-box',
            }}
        >
            {projectData.map((project, index) => (
                <Card
                    key={project.title}
                    sx={{
                        gridColumn: { xs: 'span 1', md: index < 2 ? 'span 6' : 'span 4' },
                        minHeight: index < 2 ? { xs: '430px', md: '500px' } : '410px',
                    }}
                >
                    <Visual sx={{ background: project.background, minHeight: index < 2 ? 210 : 155 }}>
                        <Glow style={{ background: project.accent }} />
                        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
                            <Chip
                                label={project.eyebrow}
                                size="small"
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.12)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    fontWeight: 600,
                                }}
                            />
                            <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', textAlign: 'right', maxWidth: '220px' }}>
                                {project.outcome}
                            </Typography>
                        </Box>
                        <Box sx={{ position: 'relative', zIndex: 1, mt: index < 2 ? 7 : 4.5, maxWidth: index < 2 ? '78%' : '90%' }}>
                            <Typography variant="h4" sx={{ fontWeight: 850, lineHeight: 1.02, mb: 1, letterSpacing: '-0.04em' }}>
                                {project.title}
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.84)', lineHeight: 1.6 }}>
                                {project.highlight}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 22,
                                bottom: 18,
                                width: 118,
                                height: 118,
                                borderRadius: '28px',
                                border: '1px solid rgba(255,255,255,0.14)',
                                background: 'rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(10px)',
                                transform: 'rotate(12deg)',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 82,
                                bottom: 60,
                                width: 86,
                                height: 86,
                                borderRadius: '24px',
                                border: '1px solid rgba(255,255,255,0.16)',
                                background: 'rgba(255,255,255,0.12)',
                                backdropFilter: 'blur(10px)',
                                transform: 'rotate(-9deg)',
                            }}
                        />
                    </Visual>
                    <Overlay>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                            {project.title}
                        </Typography>
                        <Typography sx={{ color: '#FFB84D', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, mb: 1 }}>
                            {project.outcome}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.74)', mb: 1.5, lineHeight: 1.6 }}>
                            {project.role}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)', mb: 1.5, lineHeight: 1.5 }}>
                            {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mb: 1.5 }}>
                            {project.technologies.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'rgba(255,255,255,0.4)',
                                        color: 'rgba(255,255,255,0.9)',
                                        fontSize: '0.7rem',
                                        height: '24px',
                                    }}
                                />
                            ))}
                        </Box>
                        <Box
                            sx={{
                                borderRadius: '14px',
                                padding: '0.9rem 1rem',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                mb: 1.5,
                            }}
                        >
                            <Typography sx={{ fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.58)', mb: 0.6 }}>
                                Why it stands out
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.6, fontSize: '0.94rem' }}>
                                {project.highlight}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                            {project.link && (
                                <LinkButton href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Launch sx={{ fontSize: 16 }} /> Live
                                </LinkButton>
                            )}
                            {project.repo && (
                                <LinkButton href={project.repo} target="_blank" rel="noopener noreferrer">
                                    <GitHub sx={{ fontSize: 16 }} /> Repo
                                </LinkButton>
                            )}
                        </Box>
                    </Overlay>
                </Card>
            ))}
        </Box>
    );
};

export default Projects;
