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
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Thoughtful software. From interface to infrastructure.');
        expect(screen.queryByText(/^Software Engineer$/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/^\/$/)).not.toBeInTheDocument();
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

    test('places selected work before the about and focus-area sections', () => {
        render(<Home />);

        const selectedWork = screen.getByRole('heading', { level: 2, name: /Proof that the ideas ship/i });
        const about = screen.getByRole('heading', { level: 2, name: /messy middle of product work/i });
        const focusArea = screen.getByRole('heading', { level: 2, name: /Interfaces with intent/i });
        const skills = screen.getByRole('heading', { level: 2, name: /Tools I reach for/i });

        expect(selectedWork.compareDocumentPosition(about) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        expect(selectedWork.compareDocumentPosition(focusArea) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        expect(about.compareDocumentPosition(focusArea) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        expect(focusArea.compareDocumentPosition(skills) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });

    test('shows one portrait and the credential pills before selected work', () => {
        render(<Home />);

        const selectedWork = screen.getByRole('heading', { level: 2, name: /Proof that the ideas ship/i });
        const before = (element) => element.compareDocumentPosition(selectedWork) & Node.DOCUMENT_POSITION_FOLLOWING;

        expect(screen.getAllByRole('img', { name: 'Jordan Rudman' })).toHaveLength(1);
        expect(screen.getAllByText('How I think')).toHaveLength(1);
        expect(before(screen.getByText('How I think'))).toBeTruthy();
        expect(before(screen.getByRole('img', { name: 'Jordan Rudman' }))).toBeTruthy();
        ['Seattle, WA, USA', 'BS Computer Science + HCI minor, Virginia Tech', 'React, Next.js, Go, TypeScript'].forEach((label) => {
            expect(screen.getAllByText(label)).toHaveLength(1);
            expect(before(screen.getByText(label))).toBeTruthy();
        });
    });

    test('shows the engineering perspective and the focus-area title', () => {
        render(<Home />);

        expect(screen.getByText('A computer science foundation, an HCI perspective, and a habit of asking how things could work better.')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 2, name: 'From idea to release' })).toBeInTheDocument();
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
        expect(screen.getByText("I'm looking for software engineering roles where I can solve useful problems, learn from a strong team, and help turn ideas into working software.")).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Email Jordan/i })).toHaveAttribute('href', 'mailto:jrud25@outlook.com');
        expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/jordan-rudman/');
        expect(screen.getByRole('link', { name: /Download Resume/i })).toHaveAttribute('href', '/Jordan-Rudman-Software-Engineer.pdf');
    });
});
