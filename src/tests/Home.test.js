/**
 * Home.test.js
 * Tests the Home component
 * @version 2026.05.11
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home Component', () => {
    test('renders the redesigned hero content and primary actions', () => {
        render(<Home />);

        expect(screen.getAllByText(/I'm Jordan/i).length).toBeGreaterThan(0);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/I build full-stack products/i);
        expect(screen.getByRole('link', { name: /View selected work/i })).toHaveAttribute('href', '#projects');
        expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/jrudman25');
        expect(screen.getByRole('link', { name: /Start a conversation/i })).toHaveAttribute('href', 'mailto:jrud25@outlook.com');
    });

    test('renders selected work section with project cards', () => {
        render(<Home />);

        expect(screen.getAllByText(/Selected work/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/LivePulse/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Guidepost/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/PixLog/i).length).toBeGreaterThan(0);
    });

    test('renders skill categories', () => {
        render(<Home />);

        expect(screen.getAllByText(/Front End/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Back End/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Tools & Platforms/i).length).toBeGreaterThan(0);
    });

    test('renders contact options', () => {
        render(<Home />);

        expect(screen.getByText(/Have a team, role, or product problem/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Email Jordan/i })).toHaveAttribute('href', 'mailto:jrud25@outlook.com');
        expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/jordan-rudman/');
        expect(screen.getByRole('link', { name: /Download Resume/i })).toHaveAttribute('href', '/Jordan-Rudman-Software-Engineer-Resume.pdf');
    });
});
