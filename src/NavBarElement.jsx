/**
 * NavBarElement.js
 * Styles the NavBar
 * @version 2026.03.19
 */
import { styled } from "@mui/material/styles";

export const Nav = styled('nav')({
    background: '#3F8FCC',
    height: '85px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.2rem calc((100vw - 1000px) / 2)',
    zIndex: 12,
});
