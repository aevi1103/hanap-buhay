import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    setCounter(state, action) {
      state.counter = action.payload;
    },
  },
});

export const { setDefectsCart, setDefectCartModalVisible } = homeSlice.actions;

export default homeSlice.reducer;
