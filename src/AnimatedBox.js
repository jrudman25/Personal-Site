/**
 * AnimatedBox.js
 * The animated box I use for smooth content loading. Used in multiple files, so it's its own component. Keep it DRY.
 * @version 2023.09.11
 */
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

const fadeInAnimation = {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
};

const AnimatedBox = styled(Box)(({ theme }) => ({
    animation: `fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    '@keyframes fadeIn': fadeInAnimation,
}));

export default AnimatedBox;
