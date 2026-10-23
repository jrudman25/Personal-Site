import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, within } from '@testing-library/react';
import Skills from '../Skills';

const expectedGroups = {
    'Languages': ['TypeScript', 'JavaScript', 'Go', 'Java', 'Python', 'SQL'],
    'Interfaces': ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'MUI'],
    'Services & data': ['Node.js', 'PostgreSQL', 'Redis', 'Supabase', 'Firebase', 'REST APIs', 'WebSockets'],
    'Testing': ['Vitest', 'Jest', 'React Testing Library', 'Playwright', 'Testify'],
    'Delivery': ['Docker', 'GitHub Actions', 'Vercel', 'GCP', 'AWS Lambda'],
    'AI integration': ['Gemini API', 'RAG', 'pgvector', 'Structured extraction'],
};

describe('Skills Component', () => {
    test('exposes a named region with one heading, one list, and every item per group', () => {
        render(<Skills />);

        expect(screen.getByRole('region', { name: 'Tools I reach for' })).toBeInTheDocument();
        expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
        expect(screen.getByRole('heading', { level: 2, name: 'Tools I reach for' })).toBeInTheDocument();
        expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(Object.keys(expectedGroups).length);
        Object.entries(expectedGroups).forEach(([title, items]) => {
            expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
            const list = screen.getByRole('list', { name: `${title} skills` });
            expect(within(list).getAllByRole('listitem')).toHaveLength(items.length);
            items.forEach((item) => {
                expect(within(list).getByText(item)).toBeInTheDocument();
            });
        });
    });

    test('does not duplicate the contact resume action', () => {
        render(<Skills />);

        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
});
