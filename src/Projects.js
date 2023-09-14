/**
 * Projects.js
 * Handles the projects showcase section on the home page.
 * @version 2023.09.14
 */
import React from 'react';
import { Box, styled } from '@mui/material';
import techdaddy from './img/techdaddy.png';
import atlas from './img/atlas.png';
import bucketlist from './img/bucketlist.png';
import spirestats from './img/spirestats.png';
import camp from './img/camp.png';
//import question from './img/questionmark.png'
import techdaddyBG from './img/techdaddyBG.jpg';
import atlasBG from './img/atlasBG.jpg';
import bucketlistBG from './img/bucketlistBG.jpg';
import spirestatsBG from './img/spirestatsBG.jpg';
import campBG from './img/campBG2.jpg';
//import musicBG from './img/musicBG.jpg'
import weathernow from './img/weathernow.png'
import weathernowBG from './img/weathernowBG.avif'
import './Projects.css';

const ProjectsGrid = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
});

const ProjectContainer = styled(Box)(({ theme }) => ({
    '&.project-container': {
        width: '100%',
        maxWidth: '600px',
        height: '325px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: 'rgba(240, 240, 240, 0.9)',
        backgroundSize: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 1s ease-in-out',
        transition: 'background-color 0.3s, transform 0.3s',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            backgroundColor: '#03003D',
            transform: 'scale(1.05)',
            cursor: 'pointer',
        },
        '@keyframes fadeIn': {
            from: {opacity: 0, transform: 'translateY(20px)'},
            to: {opacity: 1, transform: 'translateY(0)'},
        },
    }
}));

const ProjectTitleOverlay = styled('div')({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '0.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    pointerEvents: 'none',
});

const ProjectIcon = styled('img')({
    width: '175px',
    height: '175px',
    objectFit: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.3s',
});

const ProjectOverlay = styled('div')({
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(3, 0, 61, 0.7)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    opacity: 0,
    transition: 'opacity 0.3s',
    '&:hover': {
        opacity: 1,
    },
    '& p': {
        marginBottom: '8px',
    },
    'a': {
        color: 'white',
        textDecoration: 'none',
        margin: '4px 0',
        padding: '4px 8px',
        border: '2px solid white',
        borderRadius: '4px',
        transition: 'color 0.3s, border-color 0.3s',

        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
            borderColor: 'black',
        }
    },
});

const Projects = () => {
    const projectData = [
        {
            title: 'Hokie Bucket List',
            description:
                'A symposium-winning web app for Virginia Tech students & Blacksburg locals to discover the great ' +
                'outdoors at a difficulty level that\'s right for them.',
            technologies: 'React, MUI, Firebase, Firestore',
            icon: bucketlist,
            background: bucketlistBG,
            link: 'https://bucketlist-90b4c.web.app/',
            repo: 'https://github.com/jrudman25/FitEx-Bucket-List',
        },
        {
            title: 'ATLAS Finances',
            description: 'An app to track and predict the performance of cryptocurrencies using data from ' +
                'Yahoo\'s Finance API and machine learning. Created as part of a winning project at VT Hacks IX. ',
            technologies: 'HTML, CSS, JavaScript, JQuery, Python, Prophet, RESTful API, Google Cloud Compute Engine ',
            icon: atlas,
            background: atlasBG,
            video: 'https://www.youtube.com/watch?v=jt1Fnz99XYw&ab_channel=JordanRudman',
            repo: 'https://github.com/jrudman25/ATLAS-Finances',
        },
        {
            title: 'WeatherNow',
            description: 'A simple desktop weather app that displays useful up-to-date information like temperature, ' +
                'wind strength, and humidity level. Built using the OpenWeatherMap API on top of plain HTML, CSS, ' +
                'and JS.',
            icon: weathernow,
            background: weathernowBG,
            technologies: 'RESTful API, HTML, CSS, JavaScript, Firebase',
            link: 'https://weathernow-old.web.app/',
            repo: 'https://github.com/jrudman25/WeatherNowOld',
        },
        {
            title: 'Slay the Spire Stats',
            description: 'A companion website for players of the PC game Slay the Spire to keep track of ' +
                'stats from their runs and see information about other users\' runs.',
            icon: spirestats,
            background: spirestatsBG,
            technologies: 'React, Python, SQL, Firebase, Flask',
            link: 'https://slaythespirestats.web.app/',
            repo: 'https://github.com/jrudman25/DBMS',
        },
        {
            title: 'CAMP',
            description: 'A design project that covered the entire lifecycle of an idea: ideation, ' +
                'design, prototyping, and evaluation. Its goal was to provide a user-friendly mobile app to ' +
                'connect local communities and combat isolation.',
            icon: camp,
            background: campBG,
            technologies: 'Figma, Canva, Balsamiq, Marvel',
            repo: 'https://github.com/jrudman25/CAMP',
        },
        {
            title: 'TechDaddy',
            description: 'A simple tool designed to empower everybody to make informed choices on their next ' +
                'electronics purchase, no matter their level of technical knowledge. Created for Google Developer ' +
                'Student Clubs.',
            icon: techdaddy,
            background: techdaddyBG,
            technologies: 'Figma, ',
            repo: 'https://github.com/Sarang-R-119/Tech-Daddy',
        },
        /**
        {
            title: 'Listle',
            description: 'Coming soon! A game for Spotify users to put their knowledge to the test. How well do you ' +
            'really know your playlists?',
            icon: question,
            background: musicBG,
            technologies: '',
            // link: '',
            // repo: '',
        },
         **/
    ];

    return (
        <Box display="flex" flexDirection="column" alignItems="center" style={{ flexGrow: 1 }}>
            <ProjectsGrid>
                {projectData.map((project, index) => (
                    <ProjectContainer
                        key={index}
                        className="project-container"
                        style={{
                            backgroundImage: `url(${project.background})`,
                        }}
                    >
                        <ProjectTitleOverlay>
                            <h1>{project.title}</h1>
                        </ProjectTitleOverlay>
                        <ProjectIcon src={project.icon} alt={project.title} />
                        <ProjectOverlay>
                            <p>{project.description}</p>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View project
                                </a>
                            )}
                            {project.video && (
                                <a href={project.video} target="_blank" rel="noopener noreferrer">
                                    View video
                                </a>
                            )}
                            {project.repo && (
                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                    View repository
                                </a>
                            )}
                        </ProjectOverlay>
                    </ProjectContainer>
                ))}
            </ProjectsGrid>
        </Box>
    );
};

export default Projects;
