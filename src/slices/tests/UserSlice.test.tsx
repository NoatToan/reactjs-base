import '@testing-library/jest-dom';
import userSlice, { userActions, UserState } from '../userSlice';

describe('user redux', () => {
  test('set user', () => {
    let initState: UserState = {
      user: {
        name: '',
        email: '',
      },
    };
    let userState = userSlice(initState, {
      type: userActions.setUser,
      payload: {
        data: {
          user: {
            name: 'test',
            email: 'test@gmail.com',
          },
        },
      },
    });

    expect(userState.user).toEqual({
      user: {
        name: 'test',
        email: 'test@gmail.com',
      },
    });
  });

  test('get user', () => {
    let initState: UserState = {
      user: {
        name: '',
        email: '',
      },
    };

    const userState = userSlice(initState, {
      type: userActions.getUser,
    });

    expect(userState).toEqual({
      user: {
        name: '',
        email: '',
      },
    });
  });

  test('login', () => {
    let initState: UserState = {
      user: {
        name: '',
        email: '',
      },
    };

    const userState = userSlice(initState, {
      type: userActions.login,
    });

    expect(userState).toEqual({
      user: {
        name: '',
        email: '',
      },
    });
  });
});
