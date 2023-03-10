import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
  user: {
    email: string | null;
    name: string | null;
  } | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser: (state: any, action: any) => {
      const { data }: any = action.payload;

      return { ...state, user: data };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getUser: (state: any, action: any) => {
      return state;
    },

    login: (state: any, action: any) => {
      return state;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    return builder;
  },
});

// Actions
export const userActions = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state?.user;

export default userSlice.reducer;