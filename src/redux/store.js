import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk, logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: [...getDefaultMiddleware(), ...middleware],
});

export { store };
