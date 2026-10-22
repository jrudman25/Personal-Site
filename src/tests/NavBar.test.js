import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from '../NavBar';
import theme from '../theme';

const mockMatchMedia = (reducedMotion, mobile = false) => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: query.includes('prefers-reduced-motion') ? reducedMotion : query.includes('max-width') && mobile,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }));
};

const renderNavBar = () => render(
    <MemoryRouter>
        <NavBar />
    </MemoryRouter>
);

describe('NavBar Component', () => {
    let target;
    let originalMatchMedia;
    let originalScrollIntoView;

    beforeEach(() => {
        originalMatchMedia = window.matchMedia;
        originalScrollIntoView = Element.prototype.scrollIntoView;
        Element.prototype.scrollIntoView = jest.fn();
        target = document.createElement('section');
        target.id = 'projects';
        document.body.appendChild(target);
    });

    afterEach(() => {
        document.body.removeChild(target);
        Element.prototype.scrollIntoView = originalScrollIntoView;
        window.matchMedia = originalMatchMedia;
    });

    test('exposes section navigation as buttons and external blog as a link', () => {
        mockMatchMedia(false);
        renderNavBar();

        ['Projects', 'About', 'Skills', 'Contact'].forEach((label) => {
            expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
        });
        expect(screen.getByRole('link', { name: /Blog/i })).toHaveAttribute('href', 'https://dev.to/jrud25');
    });

    test('reaches the first section button after the logo with the keyboard', () => {
        mockMatchMedia(false);
        renderNavBar();

        userEvent.tab();
        expect(screen.getByRole('link', { name: /circle logo/i })).toHaveFocus();

        userEvent.tab();
        expect(screen.getByRole('button', { name: 'Projects' })).toHaveFocus();
    });

    test('activates a section button with Enter and scrolls smoothly by default', () => {
        mockMatchMedia(false);
        renderNavBar();

        const projects = screen.getByRole('button', { name: 'Projects' });
        projects.focus();
        userEvent.keyboard('{enter}');

        expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    test('scrolls without animation when reduced motion is preferred', () => {
        mockMatchMedia(true);
        renderNavBar();

        userEvent.click(screen.getByRole('button', { name: 'Projects' }));

        expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto' });
    });

    test('opens the mobile menu with linked aria state and closes after selecting a section', async () => {
        mockMatchMedia(false, true);
        renderNavBar();

        const menuButton = screen.getByRole('button', { name: 'menu' });
        expect(menuButton).not.toHaveAttribute('aria-expanded');

        userEvent.click(menuButton);

        await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'true'));
        const menu = document.getElementById(menuButton.getAttribute('aria-controls'));
        expect(menu).toBeInTheDocument();

        userEvent.click(await screen.findByRole('menuitem', { name: 'Projects' }));

        expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
        await waitFor(() => expect(menuButton).not.toHaveAttribute('aria-expanded'));
    });
});

describe('MUI theme typography', () => {
    test('applies the shared font family to typography and buttons', () => {
        render(
            <ThemeProvider theme={theme}>
                <Typography>Body copy</Typography>
                <Button>Action</Button>
            </ThemeProvider>
        );

        expect(screen.getByText('Body copy')).toHaveStyle({ fontFamily: 'var(--font-sans)' });
        expect(screen.getByRole('button', { name: 'Action' })).toHaveStyle({ fontFamily: 'var(--font-sans)' });
    });
});
