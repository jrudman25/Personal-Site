/**
 * App.js
 * Handles loading and routing for the site.
 * @version 2023.08.20
 */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import Loading from './Loading';
import Home from './Home';
import Error from './Error';
import About from './About';
import Resume from './Resume';
import Footer from "./Footer";

function App() {
    const [loadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    return (
        <>
            {!loadingComplete && <Loading onLoadingComplete={handleLoadingComplete} />}
            {loadingComplete && (
                <Router>
                    <Box style={{ height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                        <NavBar />
                        <Box style={{ flexGrow: 1, paddingTop: '120px' }}>
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/resume" element={<Resume />} />
                                <Route path="*" element={<Error />} />
                            </Routes>
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Footer />
                        </Box>
                    </Box>
                </Router>
            )}
        </>
    );
}

export default App;
