/**
 * Projects.jsx
 * A responsive card grid showcasing curated projects.
 * @version 2026.05.11
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
    padding: '1.25rem',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
        description: 'A high-performance live-event chat platform with authenticated rooms, ephemeral Redis history, and Ticketmaster-powered event discovery.',
        technologies: ['Go', 'Next.js', 'TypeScript', 'WebSockets', 'Neon', 'Upstash Redis', 'Clerk', 'Ticketmaster API', 'Northflank'],
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        accent: 'linear-gradient(135deg, rgba(80,181,255,0.55) 0%, rgba(116,88,255,0.35) 100%)',
        eyebrow: 'Featured product build',
        features: 'JWT-authenticated WebSocket rooms, Redis TTL chat history, event ingestion',
        outcome: 'Realtime engagement platform',
        highlight: 'High-performance chat room companion for live event engagement from anywhere.',
        standout: 'LivePulse combines Go WebSocket hubs, Clerk JWT handshakes, Redis TTL cleanup, Neon event storage, and Ticketmaster ingestion to model the scaling and data-lifecycle problems behind real live-event products.',
        link: 'https://livepulse-hq.vercel.app/',
        repo: 'https://github.com/jrudman25/LivePulse',
    },
    {
        title: 'Guidepost',
        description: 'An AI-powered job search manager that parses resumes, discovers listings, scores fit, and tracks applications through an analytics dashboard.',
        technologies: ['Next.js', 'TypeScript', 'Gemini API', 'SerpAPI', 'Supabase', 'Recharts', 'Vercel Cron', 'Vitest'],
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
        accent: 'linear-gradient(135deg, rgba(117,220,255,0.45) 0%, rgba(255,255,255,0.14) 100%)',
        eyebrow: 'AI-assisted workflow',
        features: 'Resume parsing, batch AI scoring, cron search, analytics dashboard',
        outcome: 'Job-search operating system',
        highlight: 'AI-powered job discovery, ranking, and tracking in one focused flow.',
        standout: 'Guidepost turns job hunting into an automated pipeline: SerpAPI discovery, Gemini resume parsing and batch scoring, Supabase RLS persistence, pipeline logs, database backups, and analytics for application outcomes.',
        link: 'https://guidepost-ai.vercel.app/',
        repo: 'https://github.com/jrudman25/guidepost',
    },
    {
        title: 'PixLog',
        description: 'A collaborative, mobile-first photo timeline app with invites, realtime comments, EXIF sorting, thumbnails, and location enrichment.',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'Realtime', 'Storage', 'exifr', 'Nominatim', 'PWA'],
        background: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
        accent: 'linear-gradient(135deg, rgba(255,121,198,0.4) 0%, rgba(69,255,204,0.3) 100%)',
        eyebrow: 'Collaborative consumer app',
        features: 'Shared timelines, realtime comments, EXIF sorting, WebP thumbnails',
        outcome: 'Shared memory timeline',
        highlight: 'Shared photo timelines that make memories easy to revisit.',
        standout: 'PixLog is more than a gallery. It combines Supabase Auth, Storage, Realtime subscriptions, EXIF parsing, Canvas-generated WebP thumbnails, and reverse geocoding so photos organize themselves into shared timelines.',
        link: 'https://pix-log.vercel.app/',
        repo: 'https://github.com/jrudman25/PixLog',
    },
    {
        title: 'TuneTeaser',
        description: 'A "Name That Tune" style game where you test your music knowledge against your own Spotify playlists.',
        technologies: ['React', 'TypeScript', 'Vite', 'Spotify API', 'iTunes API', 'Firebase', 'MUI', 'React Router'],
        background: 'linear-gradient(135deg, #1db954 0%, #191414 100%)',
        accent: 'linear-gradient(135deg, rgba(29,185,84,0.4) 0%, rgba(255,255,255,0.1) 100%)',
        eyebrow: 'Playful music project',
        features: 'Spotify login, playlist selection, preview playback, fuzzy matching',
        outcome: 'Spotify playlist game',
        highlight: 'A Spotify playlist guessing game for competitive music fans.',
        standout: 'TuneTeaser blends Spotify playlist ownership with iTunes preview audio, fuzzy answer matching, and dynamic snippet lengths, creating a personalized game loop from music the player already knows.',
        link: 'https://tuneteaser.web.app/',
        repo: 'https://github.com/jrudman25/TuneTeaser',
    },
    {
        title: 'ScoreSeeker',
        description: 'A sports statistics site for searching teams, viewing schedules, and playing dynamic audio based on match outcomes.',
        technologies: ['Next.js', 'React', 'TheSportsDB API', 'Tone.js', 'MUI', 'next-themes', 'Netlify', 'Jest'],
        background: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)',
        accent: 'linear-gradient(135deg, rgba(233,69,96,0.45) 0%, rgba(255,180,77,0.22) 100%)',
        eyebrow: 'Data + sound experiment',
        features: 'Team search fallback, schedule views, outcome-based audio feedback',
        outcome: 'Sports data exploration',
        highlight: 'Sports stats browsing with playful audio feedback.',
        standout: 'ScoreSeeker treats sports data as an interactive media surface, proxying TheSportsDB through secure Next.js routes, using a local team index fallback, and generating Tone.js audio from match outcomes.',
        link: 'https://scoreseeker.netlify.app/',
        repo: 'https://github.com/jrudman25/ScoreSeeker',
    },
    {
        title: 'AlgoVis',
        description: 'An interactive visualization tool for sorting algorithms, built with modern tooling and smooth animations.',
        technologies: ['React', 'TypeScript', 'Vite', 'HeroUI', 'Tailwind CSS', 'TanStack Router', 'Vitest', 'Cloudflare Pages'],
        background: 'linear-gradient(135deg, #ff6b6b 0%, #556270 100%)',
        accent: 'linear-gradient(135deg, rgba(255,107,107,0.45) 0%, rgba(255,210,63,0.25) 100%)',
        eyebrow: 'Interactive learning tool',
        features: 'Bubble sort, merge sort, animated comparisons, routed UI',
        outcome: 'Algorithm visualization',
        highlight: 'Sorting algorithms made clearer through motion and interaction.',
        standout: 'AlgoVis makes algorithm behavior tangible with animated comparisons for bubble sort and merge sort, backed by a modern Vite, HeroUI, TanStack Router, and Vitest setup deployed on Cloudflare Pages.',
        link: 'https://algovis.jrud25.workers.dev/',
        repo: 'https://github.com/jrudman25/AlgoVis',
    },
    {
        title: 'Hokie Bucket List',
        description: 'A social platform for discovering Blacksburg-local activities/hikes, joining groups, and comparing progress on a leaderboard.',
        technologies: ['React', 'MUI', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'React Router', 'styled-components'],
        background: 'linear-gradient(135deg, #3c1f12 0%, #86198f 45%, #f97316 100%)',
        accent: 'linear-gradient(135deg, rgba(134,25,143,0.42) 0%, rgba(255,184,77,0.32) 100%)',
        eyebrow: 'Social outdoor app',
        features: 'Recommendations, groups, leaderboards, geolocation tracking, photo uploads',
        outcome: 'Outdoor activity discovery',
        highlight: 'Turns outdoor ideas into shared goals and friendly competition.',
        standout: 'Hokie Bucket List stands out as an HCI capstone product: user research, pilot testing, Firebase Auth/Firestore/Storage, geolocation-based hike tracking, scavenger-hunt uploads, and group leaderboards.',
        link: 'https://bucketlist-90b4c.web.app/',
        repo: 'https://github.com/jrudman25/FitEx-Bucket-List',
    },
    {
        title: 'NodeKill',
        description: 'A Raycast extension that finds local development servers on Windows and helps stop stale Node processes quickly.',
        technologies: ['TypeScript', 'Raycast API', 'PowerShell', 'Windows TCP', 'Node.js'],
        background: 'linear-gradient(135deg, #020617 0%, #0f766e 50%, #22d3ee 100%)',
        accent: 'linear-gradient(135deg, rgba(34,211,238,0.38) 0%, rgba(16,185,129,0.24) 100%)',
        eyebrow: 'Productivity tool',
        features: 'TCP listener discovery, process metadata, URL actions, safe process killing',
        outcome: 'Cleaner local dev workflow',
        highlight: 'Stops stale local dev servers from the Raycast command palette.',
        standout: 'NodeKill solves a real Windows developer annoyance by using PowerShell to inspect localhost TCP listeners, resolve PID metadata, filter likely dev servers, and confirm destructive process-kill actions.',
        link: 'https://github.com/jrudman25/NodeKill', // will be https://raycast.com/jrud25/nodekill when published
        repo: 'https://github.com/jrudman25/NodeKill',
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
                        minHeight: index < 2 ? { xs: '700px', md: '720px' } : '735px',
                    }}
                >
                    <Visual sx={{ background: project.background, height: index < 2 ? { xs: 250, md: 270 } : 220 }}>
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
                        </Box>
                        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: index < 2 ? '78%' : '90%', mt: 'auto', mb: 'auto', pt: 1.5 }}>
                            <Typography variant="h4" sx={{ fontWeight: 850, lineHeight: 1.02, mb: 1, letterSpacing: '-0.04em', minHeight: '2.05em', display: 'flex', alignItems: 'flex-end' }}>
                                {project.title}
                            </Typography>
                            <Typography sx={{
                                color: 'rgba(255,255,255,0.84)',
                                lineHeight: 1.6,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                minHeight: '3.2em',
                            }}>
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
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, minHeight: '1.35em' }}>
                            {project.title}
                        </Typography>
                        <Typography sx={{ color: '#FFB84D', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, mb: 1, minHeight: '2.3em' }}>
                            {project.outcome}
                        </Typography>
                        <Typography sx={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.54)', mb: 0.45, fontWeight: 800 }}>
                            Description
                        </Typography>
                        <Typography variant="body2" sx={{
                            color: 'rgba(255,255,255,0.82)',
                            mb: 1.5,
                            lineHeight: 1.5,
                            minHeight: '4.5em',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}>
                            {project.description}
                        </Typography>
                        <Box sx={{ mb: 1.5, minHeight: '4.8em' }}>
                            <Typography sx={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.54)', mb: 0.45, fontWeight: 800 }}>
                                Key features
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.55 }}>
                                {project.features}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mb: 1.5, minHeight: '84px', alignContent: 'flex-start' }}>
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
                                minHeight: '190px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Typography sx={{ fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.58)', mb: 0.6 }}>
                                Why it stands out
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.6, fontSize: '0.94rem' }}>
                                {project.standout}
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
