import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { store } from '../../store';
import userSlice, { userActions, UserState } from '../../slices/userSlice';
import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../login/Login';

describe('home UI', () => {
  test('default home screen', async () => {
    render(
      <Provider store={store}>
        <SnackbarProvider>
          (<Home />)
        </SnackbarProvider>
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const initState: UserState = {
      user: {
        name: 'test',
        email: 'test@gmail.com',
      },
    };
    let userState = userSlice(initState, { type: 'setUser' });

    expect(userState).toEqual({
      user: {
        name: 'test',
        email: 'test@gmail.com',
      },
    });

    // verify page content for expected route after navigating

    expect(
      screen.getByRole('heading', {
        name: /welcome/i,
      })
    ).toBeInTheDocument();
  });
});
