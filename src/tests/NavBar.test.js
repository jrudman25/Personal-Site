import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
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
        expect(screen.getByRole('link', { name: 'Jordan Rudman, home' })).toHaveFocus();

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

        const menuButton = screen.getByRole('button', { name: 'Open navigation menu' });
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

describe('NavBar active section indicator', () => {
    const sectionIds = ['projects', 'about', 'skills', 'contact'];
    let root;
    let tops;
    let metrics;
    let originalMatchMedia;
    let originalResizeObserver;

    const defineMetric = (name, getter) => {
        Object.defineProperty(root, name, { configurable: true, get: getter });
    };

    const renderAt = (path = '/') => render(
        <MemoryRouter initialEntries={[path]}>
            <NavBar />
        </MemoryRouter>
    );

    const scrollRoot = async () => {
        await act(async () => {
            fireEvent.scroll(root);
            await new Promise((resolve) => requestAnimationFrame(() => resolve()));
        });
    };

    const currentLabels = () => screen.queryAllByRole('button')
        .filter((button) => button.getAttribute('aria-current') === 'location')
        .map((button) => button.textContent);

    beforeEach(() => {
        originalMatchMedia = window.matchMedia;
        originalResizeObserver = window.ResizeObserver;
        mockMatchMedia(false);
        metrics = { scrollTop: 0, clientHeight: 800, scrollHeight: 3000 };
        tops = { projects: 900, about: 1500, skills: 2100, contact: 2700 };
        root = document.createElement('div');
        root.id = 'app-scroll-container';
        root.getBoundingClientRect = () => ({ top: 0, bottom: 800, left: 0, right: 1000, width: 1000, height: 800 });
        defineMetric('scrollTop', () => metrics.scrollTop);
        defineMetric('clientHeight', () => metrics.clientHeight);
        defineMetric('scrollHeight', () => metrics.scrollHeight);
        sectionIds.forEach((id) => {
            const section = document.createElement('section');
            section.id = id;
            section.getBoundingClientRect = () => ({ top: tops[id], bottom: tops[id] + 500, left: 0, right: 1000, width: 1000, height: 500 });
            root.appendChild(section);
        });
        document.body.appendChild(root);
    });

    afterEach(() => {
        document.body.removeChild(root);
        window.matchMedia = originalMatchMedia;
        window.ResizeObserver = originalResizeObserver;
    });

    test('marks no section while the hero is in view', async () => {
        renderAt();
        await scrollRoot();

        expect(currentLabels()).toEqual([]);
    });

    test('marks exactly one section as the page scrolls and clears it back at the hero', async () => {
        renderAt();

        tops = { projects: -100, about: 500, skills: 1100, contact: 1700 };
        metrics.scrollTop = 1000;
        await scrollRoot();
        await waitFor(() => expect(currentLabels()).toEqual(['Projects']));

        tops = { projects: -700, about: 50, skills: 600, contact: 1200 };
        metrics.scrollTop = 1600;
        await scrollRoot();
        await waitFor(() => expect(currentLabels()).toEqual(['About']));

        tops = { projects: -1300, about: -600, skills: 100, contact: 700 };
        metrics.scrollTop = 2000;
        await scrollRoot();
        await waitFor(() => expect(currentLabels()).toEqual(['Skills']));

        tops = { projects: 900, about: 1500, skills: 2100, contact: 2700 };
        metrics.scrollTop = 0;
        await scrollRoot();
        await waitFor(() => expect(currentLabels()).toEqual([]));
    });

    test('keeps a fractional section top within one pixel of the activation line active', async () => {
        renderAt();

        tops = { projects: -700, about: 120.4, skills: 600, contact: 1200 };
        metrics.scrollTop = 1600;
        await scrollRoot();
        await waitFor(() => expect(currentLabels()).toEqual(['About']));

        tops = { projects: -700, about: 120, skills: 600, contact: 1200 };
        await scrollRoot();
        await waitFor(() => expect(currentLabels()).toEqual(['About']));

        tops = { projects: -700, about: 121.1, skills: 600, contact: 1200 };
        await scrollRoot();
        await waitFor(() => expect(currentLabels()).toEqual(['Projects']));
    });

    test('marks the last section at the bottom even when its top is below the activation line', async () => {
        renderAt();

        tops = { projects: -1800, about: -1200, skills: -600, contact: 500 };
        metrics.scrollTop = 2200;
        await scrollRoot();

        await waitFor(() => expect(currentLabels()).toEqual(['Contact']));
    });

    test('does not mark a section on unknown routes', async () => {
        renderAt('/not-found');
        tops = { projects: -100, about: 500, skills: 1100, contact: 1700 };
        await scrollRoot();

        expect(currentLabels()).toEqual([]);
    });

    test('shows the active section beside the mobile menu button and selects it in the menu', async () => {
        mockMatchMedia(false, true);
        renderAt();

        tops = { projects: -700, about: 50, skills: 600, contact: 1200 };
        metrics.scrollTop = 1600;
        await scrollRoot();

        const menuButton = screen.getByRole('button', { name: 'Open navigation menu' });
        await waitFor(() => expect(screen.getByText('About')).toBeInTheDocument());

        fireEvent.click(menuButton);
        const item = await screen.findByRole('menuitem', { name: 'About' });

        expect(item).toHaveAttribute('aria-current', 'location');
        expect(item).toHaveClass('Mui-selected');
        expect(screen.getByRole('menuitem', { name: 'Projects' })).not.toHaveAttribute('aria-current');
    });

    test('removes its listeners and observers on unmount', () => {
        const disconnect = jest.fn();
        const observe = jest.fn();
        window.ResizeObserver = jest.fn().mockImplementation(() => ({ observe, disconnect, unobserve: jest.fn() }));
        const removeSpy = jest.spyOn(root, 'removeEventListener');
        const windowRemoveSpy = jest.spyOn(window, 'removeEventListener');

        const { unmount } = renderAt();
        expect(observe).toHaveBeenCalled();
        unmount();

        expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
        expect(windowRemoveSpy).toHaveBeenCalledWith('resize', expect.any(Function));
        expect(disconnect).toHaveBeenCalled();
        removeSpy.mockRestore();
        windowRemoveSpy.mockRestore();
    });

    test('works without ResizeObserver support', async () => {
        window.ResizeObserver = undefined;
        renderAt();

        tops = { projects: -100, about: 500, skills: 1100, contact: 1700 };
        await scrollRoot();

        await waitFor(() => expect(currentLabels()).toEqual(['Projects']));
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
