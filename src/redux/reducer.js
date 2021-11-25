import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { handelChangeFilter } from "./action";
import { fatchContact, addContact, deleteContact } from "./operations";
import { getNewContact } from "../helpers/newContact";

import store from "./store";

const itemsReduser = createReducer([], {
  [fatchContact.fulfilled]: (_, { payload }) => {
    console.log(store.getState());
    return payload;
  },
  [addContact.fulfilled]: (state, action) => {
    console.log(store.getState());
    getNewContact(state, action);
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReduser = createReducer("", {
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
  items: itemsReduser,
  filter: filterReduser,
  loading,
});
