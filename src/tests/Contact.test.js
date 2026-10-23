import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact actions', () => {
    let originalClipboard;

    beforeEach(() => {
        originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
    });

    afterEach(() => {
        if (originalClipboard) {
            Object.defineProperty(navigator, 'clipboard', originalClipboard);
        } else {
            delete navigator.clipboard;
        }
    });

    test('keeps the email, LinkedIn, and resume actions', () => {
        render(<Contact />);

        expect(screen.getByRole('link', { name: 'Email Jordan' })).toHaveAttribute('href', 'mailto:jrud25@outlook.com');

        const linkedIn = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedIn).toHaveAttribute('href', 'https://www.linkedin.com/in/jordan-rudman/');
        expect(linkedIn).toHaveAttribute('target', '_blank');
        expect(linkedIn).toHaveAttribute('rel', 'noopener noreferrer');

        const resume = screen.getByRole('link', { name: 'Download Resume' });
        expect(resume).toHaveAttribute('href', '/Jordan-Rudman-Software-Engineer.pdf');
        expect(resume).toHaveAttribute('download');
    });

    test('shows three links, one copy button, and no visible address', () => {
        render(<Contact />);

        expect(screen.getAllByRole('link')).toHaveLength(3);
        expect(screen.getAllByRole('button')).toHaveLength(1);
        expect(screen.getByRole('button', { name: 'Copy email address' })).toBeInTheDocument();
        expect(screen.getByRole('status')).toHaveTextContent('');
        expect(screen.queryByText('jrud25@outlook.com')).not.toBeInTheDocument();
    });

    test('announces when copying succeeds', async () => {
        const writeText = jest.fn().mockResolvedValue();
        Object.defineProperty(navigator, 'clipboard', {
            value: { writeText },
            configurable: true,
        });
        render(<Contact />);

        fireEvent.click(screen.getByRole('button', { name: 'Copy email address' }));

        expect(writeText).toHaveBeenCalledWith('jrud25@outlook.com');
        await waitFor(() => {
            expect(screen.getByRole('status')).toHaveTextContent('Email address copied');
        });
    });

    test('announces and explains when copying fails', async () => {
        Object.defineProperty(navigator, 'clipboard', {
            value: { writeText: jest.fn().mockRejectedValue(new Error('Clipboard unavailable')) },
            configurable: true,
        });
        render(<Contact />);

        fireEvent.click(screen.getByRole('button', { name: 'Copy email address' }));

        await waitFor(() => {
            expect(screen.getByRole('status')).toHaveTextContent("Couldn't copy the email address");
        });
        expect(await screen.findByText("Couldn't copy, use Email Jordan")).toBeInTheDocument();
    });
});
