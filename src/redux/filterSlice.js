import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

const { setFilter } = filterSlice.actions;

const filterReducer = filterSlice.reducer;

export { setFilter, filterReducer };
