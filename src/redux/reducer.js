import { combineReducers } from 'redux';

const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [];
const filterInitialState = { filter: '' };

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContacts':
      const newState = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;

    case 'contacts/deleteContacts':
      console.log(action);
      return state.filter(contact => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filters/setFilter':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
