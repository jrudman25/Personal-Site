import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', maxHeight: '1025px', overflow: 'hidden', marginBottom: '20px' }}>
            <Document file={{ url: '/resume.pdf' }}>
                <Page pageNumber={1} width={800} />
            </Document>
        </div>
    );
};

export default Resume;
