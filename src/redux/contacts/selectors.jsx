import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.value;

export const selectIsContactsEmpty = state => selectContacts(state).length === 0;

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