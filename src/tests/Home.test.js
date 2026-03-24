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
        const { getByText } = render(<Home />);
        const frontEnd = getByText(/Front/i);
        const backEnd = getByText(/Back/i);
        const tools = getByText(/Tools/i);

        expect(frontEnd).toBeInTheDocument();
        expect(backEnd).toBeInTheDocument();
        expect(tools).toBeInTheDocument();

    });
});
