import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './createReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
