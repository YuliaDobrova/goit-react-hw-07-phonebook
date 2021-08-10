import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const setFilter = createAction("contacts/setFilter");

// ==================================================================
// REDUX-TOOLKIT
// import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("phonebook/addContact");
// export const deleteContact = createAction("phonebook/deleteContact");
// export const setFilter = createAction("phonebook/setFilter");

// const actions = { addContact, deleteContact, setFilter };
// export default actions;

// ==================================================================
// Создай действия (actions) сохранения и удаления контакта, а также обновления фильтра.
// REDUX
// export const ADD_CONTACT = "phonebook/addContact";
// export const DELETE_CONTACT = "phonebook/deleteContact";
// export const SET_FILTER = "phonebook/setFilter";

// const addContact = (newContact) => ({
//   type: ADD_CONTACT,
//   payload: newContact,
// });
// const deleteContact = (id) => ({ type: DELETE_CONTACT, payload: id });

// const setFilter = (value) => ({ type: SET_FILTER, payload: value });
// export { addContact, deleteContact, setFilter };
