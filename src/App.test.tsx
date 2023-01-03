import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from './App';

describe('WrappedApp', () => {
  it('Renders hello world', () => {
    render(<WrappedApp />);
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveTextContent(/hello world/i);
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/non-existant']}>
        <App />
      </MemoryRouter>
    );

    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveTextContent(/not found/i);
  });
});
