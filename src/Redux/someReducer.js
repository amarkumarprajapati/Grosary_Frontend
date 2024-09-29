import { createSlice } from '@reduxjs/toolkit';

export const someSlice = createSlice({
  name: 'someFeature',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = someSlice.actions;

export default someSlice.reducer;
