/**
 * Projects.jsx
 * A featured card row plus an expandable index of secondary projects.
 * @version 2026.09.14
 */
import React, { useState } from 'react';
import { Box, Chip, Collapse, Typography, styled, useMediaQuery } from '@mui/material';
import { Launch, GitHub, ExpandMore } from '@mui/icons-material';

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
    '&:focus-visible': {
        outline: '2px solid #FFB84D',
        outlineOffset: '2px',
    },
});

const DetailsButton = styled('button')({
    padding: '7px 14px',
    border: '1px solid rgba(255,255,255,0.18)',
    color: 'rgba(255,255,255,0.88)',
    borderRadius: '999px',
    background: 'transparent',
    fontFamily: 'inherit',
    cursor: 'pointer',
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
    '&:focus-visible': {
        outline: '2px solid #FFB84D',
        outlineOffset: '2px',
    },
});

const RowCard = styled(Box)({
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
    padding: '1.1rem 1.25rem',
    color: 'white',
    transition: 'border-color 0.25s ease, background-color 0.25s ease',
    '&:hover': {
        borderColor: 'rgba(255,255,255,0.28)',
        backgroundColor: 'rgba(255,255,255,0.03)',
    },
});

const microLabel = {
    fontSize: '0.72rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.54)',
    fontWeight: 800,
};

const featuredProjects = [
    {
        title: 'LivePulse',
        description: 'A high-performance live-event chat platform with authenticated rooms, ephemeral Redis history, and Ticketmaster-powered event discovery.',
        technologies: ['Go', 'Next.js', 'TypeScript', 'WebSockets', 'Neon', 'Upstash Redis', 'Clerk', 'Ticketmaster API', 'Northflank'],
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        accent: 'linear-gradient(135deg, rgba(80,181,255,0.55) 0%, rgba(116,88,255,0.35) 100%)',
        eyebrow: 'Full-stack realtime build',
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
        eyebrow: 'Applied AI workflow',
        features: 'Resume parsing, batch AI scoring, cron search, analytics dashboard',
        outcome: 'Job-search operating system',
        highlight: 'AI-powered job discovery, ranking, and tracking in one focused flow.',
        standout: 'Guidepost turns job hunting into an automated pipeline: SerpAPI discovery, Gemini resume parsing and batch scoring, Supabase RLS persistence, pipeline logs, database backups, and analytics for application outcomes.',
        link: 'https://guidepost-ai.vercel.app/',
        repo: 'https://github.com/jrudman25/guidepost',
    },
    {
        title: 'Proofstack',
        description: 'A GitHub portfolio intelligence tool that syncs repositories, detects tech stacks, and turns project history into cited briefings for owners preparing to explain their work and viewers trying to understand it.',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'Gemini API', 'GitHub OAuth', 'Upstash Redis', 'Tailwind CSS'],
        background: 'linear-gradient(135deg, #3c1f12 0%, #86198f 45%, #f97316 100%)',
        accent: 'linear-gradient(135deg, rgba(134,25,143,0.42) 0%, rgba(255,184,77,0.32) 100%)',
        eyebrow: 'AI portfolio intelligence',
        features: 'Repository sync, RAG chat with citations, interview briefings, owner-edited briefs',
        outcome: 'GitHub portfolio, explained',
        highlight: 'Makes your GitHub history legible, for interview prep and for anyone browsing your work.',
        standout: 'Proofstack combines GitHub OAuth sync, dependency-based stack detection, pgvector embeddings, and hybrid RAG chat with enforced citations, so owners get interview-ready context and external viewers get an evidence-backed way to explore the work.',
        link: 'https://getproofstack.vercel.app/',
        repo: 'https://github.com/jrudman25/Proofstack',
    },
];

const moreProjects = [
    {
        title: 'TuneTeaser',
        description: 'A "Name That Tune" style game where you test your music knowledge against your own Spotify playlists.',
        technologies: ['React', 'TypeScript', 'Vite', 'Spotify API', 'iTunes API', 'Firebase', 'MUI', 'React Router'],
        features: 'Spotify login, playlist selection, preview playback, fuzzy matching',
        outcome: 'Spotify playlist game',
        highlight: 'A Spotify playlist guessing game for competitive music fans.',
        standout: 'TuneTeaser blends Spotify playlist ownership with iTunes preview audio, fuzzy answer matching, and dynamic snippet lengths, creating a personalized game loop from music the player already knows.',
        link: 'https://tuneteaser.web.app/',
        repo: 'https://github.com/jrudman25/TuneTeaser',
    },
    {
        title: 'BestInSlot',
        description: 'A client-side Minecraft mod for Forge 1.12.2 and NeoForge 1.21.1 that lets players browse and sort every weapon, tool, and armor piece in their modpack.',
        technologies: ['Java', 'Gradle', 'NeoForge', 'Forge', 'Multi-loader builds'],
        features: 'In-game item browser, stat sorting, modded-item fallbacks, dual JAR releases',
        outcome: 'In-game gear comparison',
        highlight: 'Rank every weapon, tool, and armor piece in a modpack.',
        standout: 'BestInSlot ships one shared Java module across two incompatible loader and JDK targets: NeoForge 1.21.1 on Java 21 and Forge 1.12.2 on Java 8. Attribute, mining-speed, and use-action fallbacks keep modded items sorting correctly.',
        link: 'https://github.com/jrudman25/BestInSlot/releases',
        repo: 'https://github.com/jrudman25/BestInSlot',
    },
    {
        title: 'PixLog',
        description: 'A collaborative, mobile-first photo timeline app with invites, realtime comments, EXIF sorting, thumbnails, and location enrichment.',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'Realtime', 'Storage', 'exifr', 'Nominatim', 'PWA'],
        features: 'Shared timelines, realtime comments, EXIF sorting, WebP thumbnails',
        outcome: 'Shared memory timeline',
        highlight: 'Shared photo timelines that make memories easy to revisit.',
        standout: 'PixLog is more than a gallery. It combines Supabase Auth, Storage, Realtime subscriptions, EXIF parsing, Canvas-generated WebP thumbnails, and reverse geocoding so photos organize themselves into shared timelines.',
        link: 'https://pix-log.vercel.app/',
        repo: 'https://github.com/jrudman25/PixLog',
    },
    {
        title: 'ScoreSeeker',
        description: 'A sports statistics site for searching teams, viewing schedules, and playing dynamic audio based on match outcomes.',
        technologies: ['Next.js', 'React', 'TheSportsDB API', 'Tone.js', 'MUI', 'next-themes', 'Netlify', 'Jest'],
        features: 'Team search fallback, schedule views, outcome-based audio feedback',
        outcome: 'Sports data exploration',
        highlight: 'Sports stats browsing with dynamic audio feedback.',
        standout: 'ScoreSeeker treats sports data as an interactive media surface, proxying TheSportsDB through secure Next.js routes, using a local team index fallback, and generating Tone.js audio from match outcomes.',
        link: 'https://scoreseeker.netlify.app/',
        repo: 'https://github.com/jrudman25/ScoreSeeker',
    },
    {
        title: 'AlgoVis',
        description: 'An interactive visualization tool for sorting algorithms, built with modern tooling and smooth animations.',
        technologies: ['React', 'TypeScript', 'Vite', 'HeroUI', 'Tailwind CSS', 'TanStack Router', 'Vitest', 'Cloudflare Pages'],
        features: 'Bubble sort, merge sort, animated comparisons, routed UI',
        outcome: 'Algorithm visualization',
        highlight: 'Sorting algorithms made clearer through motion and interaction.',
        standout: 'AlgoVis makes algorithm behavior tangible with animated comparisons for bubble sort and merge sort, backed by a modern Vite, HeroUI, TanStack Router, and Vitest setup deployed on Cloudflare Pages.',
        link: 'https://algovis.pages.dev/',
        repo: 'https://github.com/jrudman25/AlgoVis',
    },

];

const FeaturedCard = ({ project }) => (
    <Card sx={{ gridColumn: { xs: 'span 1', md: 'span 4' } }}>
        <Visual sx={{ background: project.image ? 'transparent' : project.background, height: 220, p: project.image ? 0 : '1.25rem' }}>
            {project.image ? (
                <Box
                    component="img"
                    src={project.image}
                    alt={`${project.title} preview`}
                    sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
            ) : (
                <Glow style={{ background: project.accent }} />
            )}
            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2, p: project.image ? '1.25rem' : 0 }}>
                <Chip
                    label={project.eyebrow}
                    size="small"
                    sx={{
                        color: 'white',
                        backgroundColor: project.image ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.12)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.16)',
                        fontWeight: 600,
                    }}
                />
            </Box>
            {!project.image && (
                <>
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
                </>
            )}
        </Visual>
        <Overlay>
            <Typography component="h3" variant="h5" sx={{ fontWeight: 700, mb: 0.5, minHeight: '1.35em' }}>
                {project.title}
            </Typography>
            <Typography sx={{ color: '#FFB84D', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, mb: 1, minHeight: '2.3em' }}>
                {project.outcome}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.95rem', lineHeight: 1.55, mb: 1.5 }}>
                {project.highlight}
            </Typography>
            <Typography sx={{ ...microLabel, mb: 0.45 }}>
                Description
            </Typography>
            <Typography variant="body2" sx={{
                color: 'rgba(255,255,255,0.82)',
                mb: 1.5,
                lineHeight: 1.5,
                minHeight: '4.5em',
            }}>
                {project.description}
            </Typography>
            <Box sx={{ mb: 1.5, minHeight: '4.8em' }}>
                <Typography sx={{ ...microLabel, mb: 0.45 }}>
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
                <Typography sx={{ ...microLabel, color: 'rgba(255,255,255,0.58)', mb: 0.6 }}>
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
);

const ProjectRow = ({ project, open, onToggle, reducedMotion }) => {
    const detailsId = `project-details-${project.title.toLowerCase()}`;
    return (
        <RowCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ minWidth: 0 }}>
                    <Typography component="h3" sx={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.3, color: 'white' }}>
                        {project.title}
                    </Typography>
                    <Typography sx={{ color: '#FFB84D', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, mt: 0.25 }}>
                        {project.outcome}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
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
                    <DetailsButton onClick={onToggle} aria-expanded={open} aria-controls={detailsId}>
                        Details
                        <ExpandMore sx={{ fontSize: 18, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }} />
                    </DetailsButton>
                </Box>
            </Box>
            <Typography
                variant="body2"
                sx={{
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.55,
                    mt: 0.75,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {project.highlight}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', mt: 1 }}>
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
            <Collapse in={open} timeout={reducedMotion ? 0 : 'auto'}>
                <Box
                    id={detailsId}
                    sx={{
                        mt: 1.5,
                        pt: 1.5,
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    <Box sx={{ gridColumn: '1 / -1' }}>
                        <Typography sx={{ ...microLabel, mb: 0.45 }}>
                            Description
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.55 }}>
                            {project.description}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ ...microLabel, mb: 0.45 }}>
                            Key features
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.55 }}>
                            {project.features}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ ...microLabel, color: 'rgba(255,255,255,0.58)', mb: 0.45 }}>
                            Why it stands out
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.6 }}>
                            {project.standout}
                        </Typography>
                    </Box>
                </Box>
            </Collapse>
        </RowCard>
    );
};

const Projects = () => {
    const [expanded, setExpanded] = useState({});
    const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

    return (
        <>
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
                {featuredProjects.map((project) => (
                    <FeaturedCard key={project.title} project={project} />
                ))}
            </Box>
            <Box sx={{ width: '100%', maxWidth: '1180px', margin: '0 auto', px: { xs: 2, md: 6 }, boxSizing: 'border-box', mt: 4 }}>
                <Typography component="p" sx={{ ...microLabel, color: 'rgba(255,255,255,0.64)', fontSize: '0.8rem', mb: 1.5 }}>
                    More projects
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {moreProjects.map((project) => (
                        <ProjectRow
                            key={project.title}
                            project={project}
                            open={Boolean(expanded[project.title])}
                            onToggle={() => setExpanded((prev) => ({ ...prev, [project.title]: !prev[project.title] }))}
                            reducedMotion={reducedMotion}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Projects;
