import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  setFilter,
  fetchContacts,
} from './createAction';

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsReducer = createReducer(INITIAL_STATE.contacts, {
  [addContact.fullfilled]: (state, action) => {
    state.items.push(action.payload);
  },
  [deleteContact.fullfilled]: (state, action) => {
    const index = state.items.findIndex(
      contacts => contacts.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [setFilter.fulfilled]: (state, action) => {
    state.items = action.payload;
  },
  [fetchContacts.fulfilled]: (state, action) => {
    state.items = action.payload;
  },
  [fetchContacts.rejected]: (state, action) => {
    console.error(action.error);
  },
});
