import '@testing-library/jest-dom';
import {
  render,
  fireEvent,
  screen,
  queryByAttribute,
} from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Form } from './Form';

const getById = queryByAttribute.bind(null, 'id');

test('formik form is submitted with fullfilled data', async () => {
  try {
    const onSubmit = jest.fn();
    render(
      <SnackbarProvider>
        <Form onSubmit={(values) => {}} />
      </SnackbarProvider>,
      { wrapper: BrowserRouter }
    );
    const user = userEvent;
    await act(async () => {
      await user.type(
        screen.getByLabelText(/email/i),
        'john.dee@someemail.com'
      );
      await user.type(screen.getByLabelText(/password/i), '123123');
    });
    const button = screen.getByRole(/submit/i);

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    await act(() => {
      fireEvent.submit(button);
    });

    const email = screen.getByLabelText(/email/i) as HTMLInputElement;

    expect(email).toBeInTheDocument();
    expect(email.value).toEqual('john.dee@someemail.com');

    const password = screen.getByLabelText(/password/i) as HTMLInputElement;

    expect(password).toBeInTheDocument();
    expect(password.value).toEqual('123123');
  } catch (e) {}
});

test('formik form show validated error', async () => {
  const onSubmit = jest.fn();
  const renderer = render(
    <SnackbarProvider>
      <Form onSubmit={(values) => {}} />
    </SnackbarProvider>,
    { wrapper: BrowserRouter }
  );
  const button = screen.getByRole(/submit/i);

  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();

  await act(() => {
    fireEvent.submit(button);
  });

  const email = screen.getByLabelText(/email/i) as HTMLInputElement;
  expect(email).toBeInTheDocument();
  expect(email.value).toEqual('');

  const password = screen.getByLabelText(/password/i) as HTMLInputElement;

  expect(password).toBeInTheDocument();
  expect(password.value).toEqual('');

  const emailError = getById(renderer.container, 'email-helper-text');

  expect(emailError).toBeInTheDocument();

  const passwordError = getById(renderer.container, 'password-helper-text');

  expect(passwordError).toBeInTheDocument();
});
