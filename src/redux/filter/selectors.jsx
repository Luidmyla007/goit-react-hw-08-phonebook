import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const selectFilter = state => state.filter;

export const selectFilterValue = createSelector(
  [selectContacts, selectFilter],
    (contacts, filter) => {
      if (!filter) {
        return contacts.items;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);