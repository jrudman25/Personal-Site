/**
 * Loading.test.js
 * Tests the intro loading animation lifecycle.
 * @version 2026.05.11
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, render } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('calls onLoadingComplete after the intro animation duration', () => {
        const onLoadingComplete = jest.fn();
        render(<Loading onLoadingComplete={onLoadingComplete} />);

        act(() => {
            jest.advanceTimersByTime(3399);
        });

        expect(onLoadingComplete).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(1);
        });

        expect(onLoadingComplete).toHaveBeenCalledTimes(1);
    });
});
