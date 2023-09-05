/**
 * Home.test.js
 * Tests the Home component
 * @version 2023.09.05
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import Home from '../Home';

describe('Home Component', () => {
    test('renders greeting text', async () => {
        const { getByText } = render(<Home />);

        // Wait for the greeting animation to complete
        await waitFor(async () => {
            const greetingText = getByText(/Hello/i);
            expect(greetingText).toBeInTheDocument();
        });
    });

    test('renders skill categories', async () => {
        const { getAllByText } = render(<Home />);
        const designerSkills = getAllByText(/Designer/i);

        expect(designerSkills[0]).toBeInTheDocument();
        expect(designerSkills[1]).toBeInTheDocument();

    });
});
