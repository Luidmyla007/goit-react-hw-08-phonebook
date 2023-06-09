import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact } from "./operations";
import { deleteContact } from "./operations";

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
   state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
   state.isLoading = false;
   state.error = payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,

  extraReducers: {
       [fetchContacts.pending]: handlePending,
       [fetchContacts.fulfilled](state, action) {
           state.isLoading = false;
           state.error = null;
           state.items = action.payload;
      },
       [fetchContacts.rejected]: handleRejected,
       [addContact.pending]: handlePending,
       [addContact.fulfilled](state, action) {
           state.isLoading = false;
           state.error = null;
           state.items.push(action.payload);
      },
       [addContact.rejected]: handleRejected,
       [deleteContact.pending]: handlePending,
       [deleteContact.fulfilled](state, action) {
           state.isLoading = false;
           state.error = null;
           const index = state.items.findIndex(
           task => task.id === action.payload.id
           );
           state.items.splice(index, 1);
      },
       [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;