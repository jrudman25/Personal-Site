/**
 * Loading.test.js
 * Tests the intro loading animation lifecycle.
 * @version 2026.05.11
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
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

    test('skips the hero mark when reduced motion is requested', () => {
        setReducedMotion(true);
        const { container } = render(<Loading />);

        expect(container).toBeEmptyDOMElement();
    });
});
