export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizeFilter) ||
      number.includes(normalizeFilter)
  );
};
