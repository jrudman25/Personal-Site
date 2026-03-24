/**
 * NavBarElement.jsx
 * Styles the NavBar
 * @version 2026.03.22
 */
import { styled } from "@mui/material/styles";

export const Nav = styled('nav')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    zIndex: 9999,
    padding: '60px',
    pointerEvents: 'none',
    boxSizing: 'border-box',

    [theme.breakpoints.down('md')]: {
        padding: '10px 20px',
    },
}));
