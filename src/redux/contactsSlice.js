import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        const newState = [...state, action.payload];
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;
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
