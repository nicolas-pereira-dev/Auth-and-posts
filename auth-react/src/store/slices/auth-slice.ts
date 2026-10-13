import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "../../models/user";

interface AuthState {
  token: string | null;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;  
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setToken, setUser, setError } = authSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectError = (state: RootState) => state.auth.error;
export default authSlice.reducer;