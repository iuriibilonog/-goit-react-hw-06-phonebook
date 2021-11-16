import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import types from "./contacts-type";

// const items = createReducer([], {
//   [types.ADD]: (state, action) => {
//     const contactsNames = state.map((item) => item.name.toLowerCase());

//     if (contactsNames.includes(action.payload.name.toLowerCase())) {
//       alert(`${action.payload.name} is already in contacts.`);
//       return state;
//     } else {
//       return [action.payload, ...state];
//     }
//   },

//КОД ВЫШЕ ОСТАВИЛ ДЛЯ СЕБЯ

const items = createReducer([], {
  [types.ADD]: (state, action) => [action.payload, ...state],

  [types.DELETE]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [types.CHANGE_FILTER]: (_, action) => action.payload,
});

export default combineReducers({
  items: items,
  filter: filter,
});
