import { createAction } from "@reduxjs/toolkit";
import types from "./contacts-type";
import { v4 } from "uuid";

const addNewContact = createAction(types.ADD, ({ name, number }) => ({
  payload: {
    id: v4(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction(types.DELETE);

const changeFilter = createAction(types.CHANGE_FILTER);

export default { addNewContact, deleteContact, changeFilter };
