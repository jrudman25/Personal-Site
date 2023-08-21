/**
 * Resume.js
 * Handles the loading and display of my resume.
 * @version 2023.08.21
 */
import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', maxHeight: '1025px', overflow: 'hidden', marginBottom: '20px' }}>
            <Document file={{ url: process.env.PUBLIC_URL + '/resume.pdf' }}>
                <Page pageNumber={1} width={800} />
            </Document>
        </div>
    );
};

export default Resume;
