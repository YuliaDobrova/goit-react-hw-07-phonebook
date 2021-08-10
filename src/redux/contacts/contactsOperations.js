import axios from "axios";
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
} from "./contactsActions";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = (newContact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", newContact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  // console.log(`id`, id);
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const contactsOperations = { addContact, deleteContact, fetchContacts };

export default contactsOperations;

// ===================================================
// const addContact = (newContact) => (dispatch) => {
//   // dispatch({ type: "contacts/addContactRequest" });
//   dispatch(addContactRequest());
//   axios.post("/contacts.json", newContact).then(({ data }) =>
//     // dispatch({ type: "contacts/addContactSuccess", payload: data }).
//     dispatch(addContactSuccess(data)).catch((error) =>
//       // dispatch({ type: "contacts/addContactError", payload: error }))
//       dispatch(addContactError(error))
//     )
//   );
// };

// До переписывания на асинхронную
// const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactsRequest());
//   axios
//     .get("/contacts.json")
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch((error) => dispatch(fetchContactsError(error)));
// };

// const addContact = (newContact) => (dispatch) => {
//   dispatch(addContactRequest());
//   axios
//     .post("/contacts", newContact)
//     // .then(console.log);
//     .then(({ data }) =>
//       dispatch(addContactSuccess(data)).catch((error) =>
//         dispatch(addContactError(error))
//       )
//     );
// };

// const deleteContact = (id) => (dispatch) => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };

// export default { addContact, deleteContact, fetchContacts };
