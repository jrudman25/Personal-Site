import React from 'react';
import { Box, styled } from '@mui/material';

const ProjectContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '400px', // Adjust the maximum width of each project
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2), // Add some space between projects
    backgroundColor: '#f0f0f0', // Adjust the background color of each project
    borderRadius: '8px', // Adjust the border radius of each project
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adjust the box shadow of each project
    animation: 'fadeIn 1s ease-in-out', // Apply the fadeIn animation to each project
    '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    },
}));

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
            technologies: 'JavaScript, Python, CSS',
            link: 'https://atlas-finances-link.com/',
        },
        {
            title: 'WeatherNow',
            description: 'Desc',
            technologies: 'HTML, CSS, JavaScript, OpenWeatherMap API',
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
        },
    ];


    return (
        <Box display="flex" flexDirection="column" alignItems="center" style={{ flexGrow: 1 }}>
            {projectData.map((project, index) => (
                <ProjectContainer key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>Technologies used: {project.technologies}</p>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View project
                        </a>
                    )}
                </ProjectContainer>
            ))}
        </Box>
    );
};

export default Projects;
