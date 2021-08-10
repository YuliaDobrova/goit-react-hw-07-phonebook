import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";

const ContactList = ({ items, deleteContact }) => {
  // console.log(`contacts list`, items);
  const onDeleteContact = (e) => {
    deleteContact(e.target.id);
  };

  return (
    <>
      <ul className={styles.contactList}>
        {items.length > 0 &&
          items.map(({ name, number, id }) => (
            <li className={styles.contactListItem} key={id}>
              <span className={styles.contactListItemSpan}>{name}</span>:
              <span className={styles.contactListItemSpan}>{number}</span>
              <button
                type="button"
                className={styles.listItemButton}
                onClick={onDeleteContact}
                id={id}
              >
                Detete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: getVisibleContacts(state),
  };
};

// До селектора:
// const mapStateToProps = (state) => {
//   // return { items: state.items };
//   return {
//     items: state.items.filter((item) =>
//       item.name.toLowerCase().includes(state.filter.toLowerCase())
//     ),
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
