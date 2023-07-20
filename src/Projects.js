import React from 'react';
import { Typography, Box, Paper, Link, styled } from '@mui/material';

const ProjectCardContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:last-child': {
        marginBottom: 0,
    },
}));

const ProjectCard = ({ project, isLeft }) => (
    <ProjectCardContainer elevation={3}>
        <Typography variant="h5" gutterBottom>
            {project.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
            {project.description}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Technologies used: {project.technologies}
        </Typography>
        <Typography variant="subtitle2">
            <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="hover">
                View project
            </Link>
        </Typography>
    </ProjectCardContainer>
);

const Projects = () => {
    const projectData = [
        {
            title: 'Hokie Bucket List',
            description:
                'A mobile-optimized website to incentivize all kinds of people to explore local hikes and the Virginia Tech campus. This was my senior capstone project that won 2nd place at the Virginia Tech Undergraduate Research in Computer Science (VTURCS) symposium.',
            technologies: 'React, MUI, Firebase',
            link: 'https://bucketlist-90b4c.web.app/',
        },
        {
            title: 'Slay the Spire Stats',
            description: 'Desc',
            technologies: 'React, Python, SQL, Firebase, Flask',
            link: 'https://slay-the-spire-stats-link.com/',
        },
        {
            title: 'ATLAS Finances',
            description: 'Desc',
            technologies: 'Technologies used: React, Firebase, etc.',
            link: 'https://atlas-finances-link.com/',
        },
        {
            title: 'WeatherNow',
            description: 'Desc',
            technologies: 'HTML, CSS, JavaScript, OpenWeatherMap API',
            link: 'https://weathernow-link.com/',
        },
        {
            title: 'CAMP',
            description: 'Desc',
            technologies: 'Figma, Canva, Balsamiq, Marvel',
            link: 'https://camp-project-link.com/',
        },
        {
            title: 'TechDaddy',
            description: 'Desc',
            technologies: 'Figma, ',
            link: 'https://daddy-project-link.com/',
        },
    ];

    return (
        <Box my={4}>
            <Typography variant="h4" textAlign="center" color="primary" mb={4}>
                Here are some of my projects.
            </Typography>

            {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    isLeft={index % 2 === 0} // Alternating sides
                />
            ))}
        </Box>
    );
};

export default Projects;
