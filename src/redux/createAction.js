import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://651e8f4244a3a8aa47689629.mockapi.io/contacts/contacts';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(`${api}`, {
        name: name,
        number: number,
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
