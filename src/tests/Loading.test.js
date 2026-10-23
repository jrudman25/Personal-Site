/**
 * Loading.test.js
 * Tests the intro loading animation lifecycle.
 * @version 2026.10.22
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading Component', () => {
    const originalMatchMedia = window.matchMedia;

    const setReducedMotion = (matches) => {
        window.matchMedia = jest.fn().mockReturnValue({
            matches,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        });
    };

    afterEach(() => {
        window.matchMedia = originalMatchMedia;
    });

    test('renders an assistive-technology-hidden hero mark', () => {
        setReducedMotion(false);
        const { container } = render(<Loading />);

        expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    });

    test('renders the hero mark without animation when reduced motion is requested', () => {
        setReducedMotion(true);
        const { container } = render(<Loading />);
        const svg = container.querySelector('svg');

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute('aria-hidden', 'true');
    });

    test('restarts the animation when the replay button is clicked', () => {
        setReducedMotion(false);
        const { container } = render(<Loading />);
        const before = container.querySelector('svg');

        fireEvent.click(screen.getByRole('button', { name: 'Replay signature animation' }));

        const after = container.querySelector('svg');
        expect(after).toBeInTheDocument();
        expect(after).not.toBe(before);
    });

    test('omits the replay button when reduced motion is requested', () => {
        setReducedMotion(true);
        render(<Loading />);

        expect(screen.queryByRole('button', { name: 'Replay signature animation' })).not.toBeInTheDocument();
    });
});
