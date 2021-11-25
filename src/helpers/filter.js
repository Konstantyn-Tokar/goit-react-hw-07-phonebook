export const getFilterContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );
};
