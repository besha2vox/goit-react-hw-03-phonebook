import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

const { addContacts, deleteContacts } = contactsSlice.actions;

const contactsReducer = contactsSlice.reducer;

export { addContacts, deleteContacts, contactsReducer };
