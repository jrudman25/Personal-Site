/**
 * Resume.js
 * Handles the loading and display of my resume.
 * @version 2023.08.30
 */
import React from 'react';
import { Typography, Box } from "@mui/material";
import { pdfjs, Document, Page } from 'react-pdf';
import {styled} from "@mui/material/styles";

// shoutout Ronak Solanki on StackOverflow (https://stackoverflow.com/a/75614759) for the following line:
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const fadeInAnimation = {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
};

const AnimatedBox = styled(Box)(({ theme }) => ({
    animation: `fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    '@keyframes fadeIn': fadeInAnimation,
}));

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

const Resume = () => {
    return (
        <AnimatedBox style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
                variant="h4"
                color= "white"
                marginBottom= "1rem"
            >
                My updated resume as of {month} {year}
            </Typography>
            <Typography
                variant="h6"
                color= "white"
                marginBottom= "1rem"
            >
                Want more information on something? Check out my {" "}
                <a href="https://github.com/jrudman25" target="_blank" rel="noopener noreferrer"
                   style={{ textDecoration: "underline" }}>
                    GitHub
                </a> or {" "}
                <a href="mailto:your.jrud25@outlook.com" target="_blank" rel="noopener noreferrer"
                   style={{ textDecoration: "underline" }}>
                    email
                </a> me.
            </Typography>
            <div style={{ maxWidth: '800px', margin: '0 auto', maxHeight: '1025px', overflow: 'hidden', marginBottom: '20px' }}>
                <Document file={{ url: process.env.PUBLIC_URL + '/resume.pdf' }}>
                    <Page pageNumber={1} width={800} />
                </Document>
            </div>
        </AnimatedBox>
    );
};

export default Resume;
