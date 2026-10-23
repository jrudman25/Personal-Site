/**
 * NavBar.jsx
 * The navigation bar at the top of the screen with my logo and scroll-based section links.
 * @version 2026.10.21
 */
import React, { useId, useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Nav } from './NavBarElement';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import myLogo from './img/JRlogo4.png';
import scrollToSection from './scrollToSection';
import useActiveSection from './useActiveSection';
import './NavBar.css';

const sectionIds = ['projects', 'about', 'skills', 'contact'];

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const mobileMenuId = useId();
    const activeId = useActiveSection(sectionIds, location.pathname === '/');

    const scrollTo = (id) => {
        const doScroll = () => {
            scrollToSection(id, prefersReducedMotion);
        };

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(doScroll, 100);
        } else {
            doScroll();
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            const scrollContainer = document.getElementById('app-scroll-container');
            if (scrollContainer) {
                scrollContainer.scrollTo({ top: 0, behavior: scrollBehavior });
            }
        }
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navItems = [
        { label: 'Projects', id: 'projects', action: () => scrollTo('projects') },
        { label: 'About', id: 'about', action: () => scrollTo('about') },
        { label: 'Skills', id: 'skills', action: () => scrollTo('skills') },
        { label: 'Contact', id: 'contact', action: () => scrollTo('contact') },
        { label: 'Blog', href: 'https://dev.to/jrud25', external: true },
    ];

    const activeItem = navItems.find((item) => item.id && item.id === activeId);

    return (
        <Nav>
            <Box sx={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
                <Link to="/" onClick={handleLogoClick}>
                    <Box
                        component="img"
                        src={myLogo}
                        alt="Jordan Rudman, home"
                        sx={{ height: '44px', width: '47px', filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}
                    />
                </Link>
            </Box>

            {isMobile ? (
                <Box sx={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
                    {activeItem && (
                        <Typography component="span" sx={{ color: '#FFB84D', fontSize: '0.85rem', fontWeight: 700 }}>
                            {activeItem.label}
                        </Typography>
                    )}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="Open navigation menu"
                        aria-haspopup="true"
                        aria-expanded={menuOpen ? 'true' : undefined}
                        aria-controls={menuOpen ? mobileMenuId : undefined}
                        onClick={handleMenuOpen}
                        sx={{ color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id={mobileMenuId}
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleMenuClose}
                        sx={{
                            mt: 1,
                            '& .MuiPaper-root': {
                                backgroundColor: 'rgba(9,7,55,0.96)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.14)',
                            },
                        }}
                    >
                        {navItems.map((item) => (
                            <MenuItem
                                key={item.label}
                                selected={Boolean(item.id) && item.id === activeId}
                                aria-current={item.id && item.id === activeId ? 'location' : undefined}
                                sx={{
                                    '&.Mui-selected, &.Mui-selected:hover': {
                                        backgroundColor: 'rgba(255,184,77,0.12)',
                                        color: '#FFB84D',
                                    },
                                }}
                                onClick={() => {
                                    handleMenuClose();
                                    if (item.external) {
                                        window.open(item.href, '_blank', 'noopener,noreferrer');
                                    } else {
                                        item.action();
                                    }
                                }}
                            >
                                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
                                    <Typography textAlign="center">{item.label}</Typography>
                                    {item.external && <OpenInNewIcon sx={{ fontSize: '0.9rem' }} />}
                                </Box>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            ) : (
                <Box className="nav-links" sx={{ pointerEvents: 'auto' }}>
                    {navItems.map((item) =>
                        item.external ? (
                            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                                <Typography className="nav" component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                                    {item.label}
                                    <OpenInNewIcon sx={{ fontSize: '0.9rem' }} />
                                </Typography>
                            </a>
                        ) : (
                            <Box
                                key={item.label}
                                component="button"
                                type="button"
                                onClick={item.action}
                                aria-current={item.id === activeId ? 'location' : undefined}
                                className="nav-link"
                                sx={{ cursor: 'pointer', border: 0, backgroundColor: 'transparent', font: 'inherit' }}
                            >
                                <Typography className="nav" component="span">{item.label}</Typography>
                            </Box>
                        )
                    )}
                </Box>
            )}
        </Nav>
    );
};

export default NavBar;
