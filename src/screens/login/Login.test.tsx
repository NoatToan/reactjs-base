import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Login } from './Login';
import { SnackbarProvider } from 'notistack';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('login UI', () => {
  test('default login screen', async () => {
    render(
      <Provider store={store}>
        <SnackbarProvider>
          (<App />)
        </SnackbarProvider>
      </Provider>
    );
    expect(screen.getByRole(/submit/i)).toBeInTheDocument();
    expect(screen.getByRole(/submit/i)).toBeEnabled();

    // verify page content for expected route after navigating
    await userEvent.click(screen.getByText(/Home/i));

    expect(
      screen.getByRole('heading', {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });

  test('login functional - submit', async () => {
    render(
      <Provider store={store}>
        <SnackbarProvider>
          (<Login />)
        </SnackbarProvider>
      </Provider>,
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
      <Provider store={store}>
        <SnackbarProvider>
          <Login />
        </SnackbarProvider>
      </Provider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByRole(/submit/i)).toBeInTheDocument();
    expect(screen.getByRole(/submit/i)).toBeEnabled();
  });
  test('loggin failed', async () => {
    render(
      <Provider store={store}>
        <SnackbarProvider>
          (<Login />)
        </SnackbarProvider>
      </Provider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByRole(/submit/i)).toBeInTheDocument();
    expect(screen.getByRole(/submit/i)).toBeEnabled();
  });
});
