/**
 * Error.test.js
 * Tests the Error component
 * @version 2026.10.21
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error from '../Error';

describe('Error Component', () => {

    test('renders the wandered-off heading', () => {
        render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        expect(screen.getByRole('heading', { level: 1, name: 'This page wandered off.' })).toBeInTheDocument();
    });

    test('renders the explanatory copy', () => {
        render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        expect(screen.getByText(/right where you left it/i)).toBeInTheDocument();
    });

    test('links back to the portfolio', () => {
        render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        );

        const link = screen.getByRole('link', { name: 'Return to the portfolio' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
    });
});
