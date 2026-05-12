/**
 * App.test.js
 * Tests the App component (routing)
 * @version 2026.05.11
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    test('shows the loading animation before rendering main content', () => {
        render(<App />);

        expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
    });

    test('renders main content after the loading animation completes', () => {
        render(<App />);

        act(() => {
            jest.advanceTimersByTime(3400);
        });

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/I build full-stack products/i);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getAllByText(/Selected work/i).length).toBeGreaterThan(0);
    });

    test('renders the error route for unknown paths after loading completes', () => {
        window.history.pushState({}, '', '/not-found');

        render(<App />);

        act(() => {
            jest.advanceTimersByTime(3400);
        });

        expect(screen.getByText(/Oops/i)).toBeInTheDocument();
    });
});
