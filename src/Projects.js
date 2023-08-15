import React from 'react';
import { Box, styled } from '@mui/material';
/**
import camp from './img/camp.jpg';
import techdaddy from './img/techdaddy.jpg';
import bucketlist from './img/bucketlist.jpg';
import atlas from './img/atlas.jpg';
import spirestats from './img/spirestats.jpg';
 **/

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
                'A symposium-winning app for Virginia Tech students & Blacksburg locals to discover the great ' +
                'outdoors at a difficulty level that\'s right for them.',
            technologies: 'React, MUI, Firebase, Firestore',
            //icon: bucketlist,
            link: 'https://bucketlist-90b4c.web.app/',
            repo: 'https://github.com/jrudman25/FitEx-Bucket-List',
        },
        {
            title: 'Slay the Spire Stats',
            description: 'A personalized website for players of the desktop game Slay the Spire to keep track of ' +
                'stats from their runs.',
            //icon: spirestats,
            technologies: 'React, Python, SQL, Firebase, Flask',
            link: 'https://slaythespirestats.web.app/',
            repo: 'https://github.com/jrudman25/DBMS',
        },
        {
            title: 'ATLAS Finances',
            description: 'An app to track and predict the performance of cryptocurrencies using data from ' +
                'Yahoo\'s Finance API and machine learning. Created as part of a winning project at VT Hacks IX. ',
            technologies: 'HTML, CSS, JavaScript, JQuery, Python, Prophet, RESTful API, Google Cloud Compute Engine ',
            //icon: atlas,
            video: 'https://www.youtube.com/watch?v=jt1Fnz99XYw&ab_channel=JordanRudman',
            repo: 'https://github.com/jrudman25/ATLAS-Finances',
        },
        {
            title: 'CAMP',
            description: 'CAMP is a team design project that covered the entire lifecycle of an idea: ideation, ' +
                'design, prototyping, and evaluation. The idea of CAMP was to provide a user-friendly mobile app to ' +
                'connect local communities and combat isolation. Users would be able to plan, run, and attend events ' +
                'in their area and get rewarded for doing so. Please see the GitHub repository below for access to ' +
                'our complete collection of documents we drew up to create and share our project. ',
            //icon: camp,
            technologies: 'Figma, Canva, Balsamiq, Marvel',
            repo: 'https://github.com/jrudman25/CAMP',
        },
        {
            title: 'TechDaddy',
            description: 'TechDaddy is a tool designed to empower everybody to make informed choices on their next' +
                'electronics purchase, no matter their level of technical knowledge.',
            //icon: techdaddy,
            technologies: 'Figma, ',
            repo: 'https://github.com/Sarang-R-119/Tech-Daddy',
        },
        /**
        {
            title: 'Listle',
            description: '',
            icon: '',
            technologies: '',
            repo: '',
        },
         **/
    ];


    return (
        <Box display="flex" flexDirection="column" alignItems="center" style={{ flexGrow: 1 }}>
            {projectData.map((project, index) => (
                <ProjectContainer key={index}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <p>Technologies used: {project.technologies}</p>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View project
                        </a>
                    )}
                    {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            View repository
                        </a>
                    )}
                </ProjectContainer>
            ))}
        </Box>
    );
};

export default Projects;
