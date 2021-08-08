import * as React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import { LogForm } from '~components';
import { emptyLog, log } from '~helpers/test-mock';

global.scrollTo = jest.fn();

test('<LogForm /> renders with write mode', () => {
    const { getByTestId } = render(<LogForm editMode={false} initialState={emptyLog} />);
    expect(getByTestId('logform-container')).toBeInTheDocument();
});

test('<LogForm /> renders with edit mode', () => {
    const { getByTestId } = render(<LogForm editMode={true} initialState={log} />);
    expect(getByTestId('logform-container')).toBeInTheDocument();
});

test('<LogForm /> validates required field/s', () => {
    const { getByTestId } = render(<LogForm editMode={false} initialState={emptyLog} />);
    const submitButton = getByTestId('logform-submit');

    fireEvent.click(submitButton);
    expect(getByTestId('logform-title-error').textContent).toBe('Title is required.');
});
