import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://connections-api.herokuapp.com/contacts'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        contactData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (updContact, thunkAPI) => {
    try {
      const response = await axios.patch(
        `https://connections-api.herokuapp.com/contacts/${updContact.id}`,
        {
          name: updContact.name,
          number: updContact.number,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
