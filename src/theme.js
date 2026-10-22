import { createTheme } from '@mui/material/styles';

const headingStyle = {
    fontWeight: 700,
    lineHeight: 1.12,
    letterSpacing: '-0.03em',
};

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-sans)',
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h1: headingStyle,
        h2: headingStyle,
        h3: headingStyle,
        body1: { lineHeight: 1.65 },
        body2: { lineHeight: 1.6 },
        button: { fontWeight: 700, textTransform: 'none' },
    },
});

export default theme;
