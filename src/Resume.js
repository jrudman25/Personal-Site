/**
 * Resume.js
 * Handles the loading and display of my resume.
 * @version 2025.12.01
 */
import React, { useEffect, useRef, useState } from 'react';
import { Typography } from "@mui/material";
import { pdfjs, Document, Page } from 'react-pdf';
import AnimatedBox from './AnimatedBox';

// shoutout Ronak Solanki on StackOverflow (https://stackoverflow.com/a/75614759) for the following line:
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

const Resume = () => {

    const containerRef = useRef(null);
    const [pageWidth, setPageWidth] = useState(800);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                // keep it from being wider than 800px on desktop
                const width = Math.min(containerRef.current.offsetWidth, 800);
                setPageWidth(width);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <AnimatedBox style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
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
            <div ref={containerRef} style={{ width: '100%', maxWidth: '800px', margin: '0 auto 20px auto', overflow: 'hidden' }}>
                <Document file={{ url: process.env.PUBLIC_URL + '/resume.pdf' }}>
                    <Page pageNumber={1} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </div>
        </AnimatedBox>
    );
};

export default Resume;
