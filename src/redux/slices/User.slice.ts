import { createSlice } from "@reduxjs/toolkit";

type UsernameState = {
  username: string | null;
}
const initialState = {
  username: "",
} as UsernameState;

export const usernameSlice = createSlice({
  name: 'username',
  initialState: initialState,
  reducers: {
    signup: (state, { payload }) => {
      const { username } = payload;
      state.username = username;
    }
  }
})

export const { signup } = usernameSlice.actions;

export default usernameSlice.reducer;