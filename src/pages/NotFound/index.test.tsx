import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFound from '.';
import { App } from '../../App';

describe('Not found screen', () => {
  it('Renders message', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NotFound />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', {
      level: 1,
    });

    expect(header).toHaveTextContent(/not found/i);
  });

  it('redirects to home when clicked on link', () => {
    render(
      <MemoryRouter initialEntries={['/not-found']}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent(/go home/i);

    fireEvent.click(link);

    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toHaveTextContent(/hello world/i);
  });
});
