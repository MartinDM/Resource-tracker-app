import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('App', () => {
    it('shows a header', () => {
        render(<App />);
        const header = screen.getByRole('heading', { name: 'Resource Tracker' });
        expect(header).toBeInTheDocument();
    });

    it('shows button as disabled', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /Add Resource/i });
        expect(button).toBeDisabled();
    });

    it('shows a resource list title', () => {
        render(<App />);
        expect(screen.getByText(/Resource List/)).toBeInTheDocument();
    });
});
