import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './createReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
