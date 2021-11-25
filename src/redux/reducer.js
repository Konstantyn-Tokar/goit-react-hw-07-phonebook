import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { handelChangeFilter } from "./action";
import { fatchContact, addContact, deleteContact } from "./operations";
import { getNewContact } from "../helpers/newContact";

const items = createReducer([], {
  [fatchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, action) => getNewContact(state, action),
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [handelChangeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fatchContact.pending]: () => true,
  [fatchContact.fulfilled]: () => false,
  [fatchContact.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
