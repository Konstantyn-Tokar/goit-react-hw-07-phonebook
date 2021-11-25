export const getNewContact = (state, action) => {
  const existingContact = state.some(
    ({ name }) => name === action.payload.name
  );
  return !existingContact
    ? [...state, action.payload]
    : (alert(`Пользователь с именем ${action.payload.name} уже добавлен`),
      state);
};
