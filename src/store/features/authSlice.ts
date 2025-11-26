import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   email: string;
//   password: string;
//   _id: number;
// }

interface AuthState {
  user: string;
  token: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: '',
  token: null,
  refresh: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem('userToken', action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refresh = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem('refresh', action.payload);
    },
    logout: (state) => {
      state.user = '';
      state.token = null;
      state.refresh = null;
      state.isAuthenticated = false;

      localStorage.removeItem('userData');
      localStorage.removeItem('userToken');
      localStorage.removeItem('refresh');
    },
  },
});

export const { setUser, setToken, logout, setRefreshToken } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
