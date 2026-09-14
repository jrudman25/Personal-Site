/**
 * App.jsx
 * Handles loading and routing for the site.
 * @version 2026.04.23
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import Home from './Home';
import Error from './Error';
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Box id="app-scroll-container" sx={{ height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <NavBar />
                <Box component="main" sx={{ flexGrow: 1, paddingTop: '120px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Footer />
                </Box>
            </Box>
        </Router>
    );
}

export default App;
