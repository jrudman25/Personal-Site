import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Code from '@mui/icons-material/Code';
import Devices from '@mui/icons-material/Devices';
import Storage from '@mui/icons-material/Storage';
import BugReport from '@mui/icons-material/BugReport';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import AutoAwesome from '@mui/icons-material/AutoAwesome';

const amber = { accent: '#FFB84D', tint: 'rgba(255,184,77,0.10)' };
const cyan = { accent: '#83D8ED', tint: 'rgba(131,216,237,0.10)' };
const violet = { accent: '#C1B4FF', tint: 'rgba(193,180,255,0.10)' };

const skillGroups = [
    { title: 'Languages', icon: Code, ...amber, items: ['TypeScript', 'JavaScript', 'Go', 'Java', 'Python', 'SQL'] },
    { title: 'Interfaces', icon: Devices, ...cyan, items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'MUI'] },
    { title: 'Services & data', icon: Storage, ...violet, items: ['Node.js', 'PostgreSQL', 'Redis', 'Supabase', 'Firebase', 'REST APIs', 'WebSockets'] },
    { title: 'Testing', icon: BugReport, ...amber, items: ['Vitest', 'Jest', 'React Testing Library', 'Playwright', 'Testify'] },
    { title: 'Delivery', icon: RocketLaunch, ...cyan, items: ['Docker', 'GitHub Actions', 'Vercel', 'GCP', 'AWS Lambda'] },
    { title: 'AI integration', icon: AutoAwesome, ...violet, items: ['Gemini API', 'RAG', 'pgvector', 'Structured extraction'] },
];

const Skills = () => (
    <Box
        component="section"
        aria-labelledby="skills-heading"
        sx={{ width: '100%', maxWidth: '1180px', mx: 'auto', px: { xs: 2, md: 6 }, boxSizing: 'border-box' }}
    >
        <Typography
            id="skills-heading"
            component="h2"
            variant="h3"
            sx={{
                color: 'white',
                fontWeight: 700,
                letterSpacing: '-0.035em',
                fontSize: { xs: '2rem', md: '2.5rem' },
                lineHeight: 1.15,
                textAlign: 'left',
            }}
        >
            Tools I reach for
        </Typography>
        <Typography
            sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem', lineHeight: 1.65, mt: 1, mb: 3 }}
        >
            Some common languages, tools, and practices behind my projects.
        </Typography>
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'minmax(0, 1fr)',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    lg: 'repeat(3, minmax(0, 1fr))',
                },
                gap: { xs: 2, md: 2.5 },
            }}
        >
            {skillGroups.map((group, index) => (
                <Box
                    key={group.title}
                    component="article"
                    aria-labelledby={`skill-group-${index}`}
                    sx={{
                        minWidth: 0,
                        boxSizing: 'border-box',
                        p: { xs: 2.5, md: 3 },
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: `radial-gradient(circle at 100% 0%, ${group.tint}, transparent 65%), rgba(255,255,255,0.025)`,
                        transition: 'transform 200ms ease, border-color 200ms ease',
                        '@media (hover: hover) and (pointer: fine)': {
                            '&:hover': { transform: 'translateY(-2px)', borderColor: group.accent },
                        },
                        '@media (prefers-reduced-motion: reduce)': {
                            transition: 'none',
                            '&:hover': { transform: 'none' },
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                placeItems: 'center',
                                width: 44,
                                height: 44,
                                flex: '0 0 auto',
                                borderRadius: '14px',
                                color: group.accent,
                                backgroundColor: group.tint,
                            }}
                        >
                            {React.createElement(group.icon, { 'aria-hidden': true, sx: { fontSize: 26 } })}
                        </Box>
                        <Typography
                            id={`skill-group-${index}`}
                            component="h3"
                            sx={{ color: 'white', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}
                        >
                            {group.title}
                        </Typography>
                    </Box>
                    <Box
                        component="ul"
                        aria-label={`${group.title} skills`}
                        sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, m: 0, p: 0, listStyle: 'none' }}
                    >
                        {group.items.map((item) => (
                            <Box
                                key={item}
                                component="li"
                                sx={{
                                    maxWidth: '100%',
                                    overflowWrap: 'anywhere',
                                    px: '9px',
                                    py: '5px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    backgroundColor: 'rgba(255,255,255,0.055)',
                                    color: 'rgba(255,255,255,0.86)',
                                    fontSize: '0.82rem',
                                    lineHeight: 1.4,
                                }}
                            >
                                {item}
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
);

export default Skills;
