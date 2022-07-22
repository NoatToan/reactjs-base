import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Login } from './Login';
import { SnackbarProvider } from 'notistack';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

describe('login UI', () => {
  test('navigate from home to login', async () => {
    render(
      <SnackbarProvider>
        (<App />)
      </SnackbarProvider>
    );
    await userEvent.click(screen.getByText(/Login/i));

    expect(screen.getByRole(/submit/i)).toBeInTheDocument();
    expect(screen.getByRole(/submit/i)).toBeEnabled();

    // verify page content for expected route after navigating
    await userEvent.click(screen.getByText(/Home/i));

    expect(
      screen.getByRole('heading', {
        name: /welcome/i,
      })
    ).toBeInTheDocument();
  });

  test('login functional - submit', async () => {
    render(
      <SnackbarProvider>
        (<Login />)
      </SnackbarProvider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByRole(/submit/i)).toBeInTheDocument();
    expect(screen.getByRole(/submit/i)).toBeEnabled();

    const email = screen.getByRole('email');
    await userEvent.type(email, 'toannt@hblab.vn');
    expect(email).toBeValid();

    const password = screen.getByRole('password');
    await userEvent.type(password, '123123');

    expect(screen.getByRole(/submit/i)).toBeEnabled();
  });
});

describe('login UX', () => {
  test('loggin success', async () => {
    render(
      <SnackbarProvider>
        <Login />
      </SnackbarProvider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByRole(/submit/i)).toBeInTheDocument();
    expect(screen.getByRole(/submit/i)).toBeEnabled();
  });
  test('loggin failed', async () => {
    render(
      <SnackbarProvider>
        (<Login />)
      </SnackbarProvider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByRole(/submit/i)).toBeInTheDocument();
    expect(screen.getByRole(/submit/i)).toBeEnabled();
  });
});
