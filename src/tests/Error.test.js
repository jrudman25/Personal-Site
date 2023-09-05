/**
 * Error.test.js
 * Tests the Error component
 * @version 2023.09.05
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error from '../Error';

describe('Error Component', () => {

    test('renders error text', async () => {
        const { getByText } = render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        // Wait for the greeting animation to complete
        await waitFor(() => {
            const errorText = getByText(/Oops/i);
            expect(errorText).toBeInTheDocument();
        });
    });

    test('renders first paragraph', async () => {
        const { getByText } = render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        const firstParagraphText = getByText(/find/i);
        expect(firstParagraphText).toBeInTheDocument();
    });

    test('renders bullet points', async () => {
        const { getByText } = render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        const bulletPointOne = getByText(/browser/i);
        expect(bulletPointOne).toBeInTheDocument();
        const bulletPointTwo = getByText(/deleted/i);
        expect(bulletPointTwo).toBeInTheDocument();
    });

    test('renders last paragraph', async () => {
        const { getByText } = render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        const lastParagraphText = getByText(/clicking/i);
        expect(lastParagraphText).toBeInTheDocument();
    });
});
