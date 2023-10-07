export const getContacts = state => {
  return state.contacts.items;
};

export const getFilter = state => {
  return state.contacts.filter;
};

export const getFilteredContacts = state => {
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
};
