import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://65202e98906e276284c425fe.mockapi.io/contacts/contacts';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ nameText, numberText }, thunkAPI) => {
    try {
      const response = await axios.post(`${api}`, {
        name: nameText,
        number: numberText,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${api}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFilter = createAsyncThunk(
  'filter/setFilter',
  async filterValue => {
    return filterValue;
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(`${api}`);
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch contacts');
    }
  }
);
