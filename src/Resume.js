/**
 * Resume.js
 * Handles the loading and display of my resume.
 * @version 2025.12.01
 */
import React from 'react';
import { Typography } from "@mui/material";
import { pdfjs, Document, Page } from 'react-pdf';
import AnimatedBox from './AnimatedBox';

// shoutout Ronak Solanki on StackOverflow (https://stackoverflow.com/a/75614759) for the following line:
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
