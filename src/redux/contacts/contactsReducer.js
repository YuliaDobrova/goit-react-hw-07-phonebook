import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  setFilter,
} from "./contactsActions";

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  //возвращает массив контактов, который записывается поверх (распылять не надо)
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, actions) =>
    state.filter((item) => item.id !== Number(actions.payload)),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default contactsReducer;

// ============================================================================
// REDUX-TOOLKIT
// import { createReducer } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import actions from "./contactsActions";

// // console.log(actions.addContact.type);
// // console.log(actions.deleteContact.type);
// // console.log(actions.setFilter.type);

// const itemsReducer = createReducer([], {
//   addContactSuccess: (state, { payload }) => [...state, payload],
//   [actions.deleteContact]: (state, { payload }) =>
//     state.filter((item) => item.id !== payload),
// });

// const filterReducer = createReducer("", {
//   [actions.setFilter]: (_, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;

// ============================================================================
// // Создай редюсеры контактов и фильтра.
// REDUX
// import { combineReducers } from "redux";
// import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./phonebookActions";

// // state={items:[{name:'', number:''},{name:'', number:''}], filter:''}

// const itemsReducer = (state = [], { type, payload }) => {
//   // console.log(payload);
//   // console.log(state);
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];

//     case DELETE_CONTACT:
//       return state.filter((item) => item.id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// // const rootReducer = combineReducers({
// //   contacts: contactsReducer,
// // });

// export default contactsReducer;
