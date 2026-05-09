/**
 * NavBarElement.jsx
 * Styles the NavBar
 * @version 2026.05.07
 */
import { styled } from "@mui/material/styles";

export const Nav = styled('nav')(({ theme }) => ({
    position: 'fixed',
    top: '24px',
    left: '50%',
    width: 'min(1120px, calc(100% - 48px))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(3, 0, 61, 0.5)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '999px',
    backdropFilter: 'blur(18px)',
    zIndex: 9999,
    padding: '12px 18px',
    pointerEvents: 'none',
    boxSizing: 'border-box',
    transform: 'translateX(-50%)',
    boxShadow: '0 18px 60px rgba(0,0,0,0.18)',

    [theme.breakpoints.down('md')]: {
        top: '12px',
        width: 'calc(100% - 24px)',
        padding: '8px 14px',
    },
}));
