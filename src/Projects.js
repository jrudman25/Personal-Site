/**
 * Projects.js
 * Handles the projects showcase section on the home page.
 * @version 2025.12.01
 */
import React from 'react';
import { Box, styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import techdaddy from './img/techdaddy.png';
import atlas from './img/atlas.png';
import bucketlist from './img/bucketlist.png';
import spirestats from './img/spirestats.png';
import camp from './img/camp.png';
import question from './img/questionmark.png';
import techdaddyBG from './img/techdaddyBG.jpg';
import atlasBG from './img/atlasBG.jpg';
import bucketlistBG from './img/bucketlistBG.jpg';
import spirestatsBG from './img/spirestatsBG.jpg';
import campBG from './img/campBG2.jpg';
import musicBG from './img/musicBG.jpg';
import weathernow from './img/weathernow.png';
import weathernowBG from './img/weathernowBG.avif';
import scoreseeker from './img/scoreseeker.png';
import scoreseekerBG from './img/scoreseekerBG.jpg';
import algovis from './img/algovis.png';
import algovisBG from './img/algovisBG.webp';

const SlideContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '900px',
    height: '500px',
    margin: '0 auto',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',

    [theme.breakpoints.down('sm')]: {
        height: '450px',
    },

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

const Overlay = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(3, 0, 61, 0.75)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    backdropFilter: 'blur(2px)',
}));

const Icon = styled('img')(({ theme }) => ({
    width: '160px',
    height: '160px',
    marginBottom: '1rem',
    objectFit: 'contain',

    [theme.breakpoints.down('sm')]: {
        width: '120px',
        height: '120px',
    },
}));

const Title = styled('h1')({
    fontSize: '2rem',
    marginBottom: '1rem',
});

const LinkButton = styled('a')({
    marginTop: '0.5rem',
    padding: '6px 14px',
    border: '2px solid white',
    color: 'white',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: '.2s',
    display: 'inline-block',

    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
    }
});

const Projects = () => {
    const projectData = [
        {
            title: 'Listle',
            description: 'Coming soon! A game for Spotify users to put their knowledge to the test.',
            icon: question,
            background: musicBG,
        },
        {
            title: 'ScoreSeeker',
            description: 'A sports statistics platform showing team history, schedules, and live game info.',
            technologies: 'React, MUI, Firebase',
            icon: scoreseeker,
            background: scoreseekerBG,
            link: 'https://scoreseeker-9dfa6.web.app/',
            repo: 'https://github.com/jrudman25/ScoreSeeker',
        },
        {
            title: 'AlgoVis',
            description: 'An interactive visualization tool for sorting algorithms.',
            technologies: 'React, MUI, Firebase',
            icon: algovis,
            background: algovisBG,
            link: 'https://algovis-e25f5.web.app/',
            repo: 'https://github.com/jrudman25/AlgoVis',
        },
        {
            title: 'Hokie Bucket List',
            description: 'A VT symposium-winning outdoor adventure tracker for students.',
            technologies: 'React, Firebase',
            icon: bucketlist,
            background: bucketlistBG,
            link: 'https://bucketlist-90b4c.web.app/',
            repo: 'https://github.com/jrudman25/FitEx-Bucket-List',
        },
        {
            title: 'ATLAS Finances',
            description: 'A cryptocurrency forecasting tool using ML + Yahoo Finance API.',
            technologies: 'Python, Google Cloud, Prophet',
            icon: atlas,
            background: atlasBG,
            video: 'https://www.youtube.com/watch?v=jt1Fnz99XYw',
            repo: 'https://github.com/jrudman25/ATLAS-Finances',
        },
        {
            title: 'WeatherNow',
            description: 'A browser weather dashboard using OpenWeatherMap API.',
            icon: weathernow,
            background: weathernowBG,
            link: 'https://weathernow-old.web.app/',
            repo: 'https://github.com/jrudman25/WeatherNowOld',
        },
        {
            title: 'Slay the Spire Stats',
            description: 'A tracker for Slay the Spire gameplay stats + run history.',
            icon: spirestats,
            background: spirestatsBG,
            link: 'https://slaythespirestats.web.app/',
            repo: 'https://github.com/jrudman25/DBMS',
        },
        {
            title: 'CAMP',
            description: 'A design project covering ideation, prototyping, and evaluation.',
            icon: camp,
            background: campBG,
            repo: 'https://github.com/jrudman25/CAMP',
        },
        {
            title: 'TechDaddy',
            description: 'A tool to help users choose electronics based on needs.',
            icon: techdaddy,
            background: techdaddyBG,
            repo: 'https://github.com/Sarang-R-119/Tech-Daddy',
        },
    ];

    return (
        <Box display="flex" justifyContent="center" width="100%">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                style={{ width: '100%', maxWidth: '900px' }}
            >
                {projectData.map((project, i) => (
                    <SwiperSlide key={i}>
                        <SlideContainer style={{ backgroundImage: `url(${project.background})` }}>
                            <Overlay>
                                <Icon src={project.icon} alt={project.title} />
                                <Title>{project.title}</Title>
                                <p>{project.description}</p>

                                {project.link && (
                                    <LinkButton href={project.link} target="_blank">View Project</LinkButton>
                                )}
                                {project.video && (
                                    <LinkButton href={project.video} target="_blank">Watch Video</LinkButton>
                                )}
                                {project.repo && (
                                    <LinkButton href={project.repo} target="_blank">View Repo</LinkButton>
                                )}
                            </Overlay>
                        </SlideContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Projects;
