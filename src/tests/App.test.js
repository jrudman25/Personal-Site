/**
 * App.test.js
 * Tests the App component (routing)
 * @version 2026.05.11
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    test('renders meaningful content immediately while the decorative intro runs', () => {
        render(<App />);

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/I build full-stack products/i);
        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getAllByText(/Selected work/i).length).toBeGreaterThan(0);
    });

    test('renders named social links', () => {
        render(<App />);

        expect(screen.getByRole('link', { name: /GitHub profile/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /LinkedIn profile/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Email Jordan directly/i })).toBeInTheDocument();
    });

    test('renders the error route for unknown client-side paths', () => {
        window.history.pushState({}, '', '/not-found');

        render(<App />);

        expect(screen.getByRole('heading', { level: 1, name: /Oops/i })).toBeInTheDocument();
    });
});
