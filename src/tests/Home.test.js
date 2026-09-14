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

    test('renders selected work with a semantic section and one heading per project', () => {
        render(<Home />);

        expect(screen.getByRole('heading', { level: 2, name: /Proof that the ideas ship/i })).toBeInTheDocument();
        expect(screen.getAllByRole('heading', { level: 3, name: /LivePulse/i })).toHaveLength(1);
        expect(screen.getAllByRole('heading', { level: 3, name: /Guidepost/i })).toHaveLength(1);
        expect(screen.getAllByRole('heading', { level: 3, name: /PixLog/i })).toHaveLength(1);
    });

    test('renders skill categories beneath the skills section heading', () => {
        render(<Home />);

        expect(screen.getByRole('heading', { level: 2, name: /Tools I reach for/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3, name: /Front End/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3, name: /Back End/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3, name: /Tools & Platforms/i })).toBeInTheDocument();
    });

    test('renders contact options', () => {
        render(<Home />);

        expect(screen.getByText(/Have a team, role, or product problem/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Email Jordan/i })).toHaveAttribute('href', 'mailto:jrud25@outlook.com');
        expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/jordan-rudman/');
        expect(screen.getByRole('link', { name: /Download Resume/i })).toHaveAttribute('href', '/Jordan-Rudman-Software-Engineer-Resume.pdf');
    });
});
