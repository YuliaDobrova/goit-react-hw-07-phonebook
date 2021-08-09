import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebookActions";

const ContactList = ({ items, deleteContact }) => {
  // console.log(`contacts list`, items);
  return (
    <>
      <ul className={styles.contactList}>
        {items.length > 0 &&
          items.map((item) => (
            <li className={styles.contactListItem} key={item.id}>
              <span className={styles.contactListItemSpan}>{item.name}</span>:
              <span className={styles.contactListItemSpan}>{item.number}</span>
              <button
                type="button"
                className={styles.listItemButton}
                onClick={() => deleteContact(item.id)}
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
  // return { items: state.items };
  return {
    items: state.items.filter((item) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
  };
};

export default connect(mapStateToProps, { deleteContact: deleteContact })(
  ContactList
);

// ==========================================================
// import React from "react";
// import ContactListItem from "../contactListItem/ContactListItem";
// import styles from "./ContactList.module.css";

// const ContactList = ({ contacts, removeContact }) => {
//   return (
//     <>
//       <ul className={styles.contactList}>
//         {contacts.map(({ id, name, number }) => (
//           <ContactListItem
//             name={name}
//             id={id}
//             key={id}
//             number={number}
//             removeContact={removeContact}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ContactList;

// ====================================================

// import React from "react";
// import styles from "./ContactListItem.module.css";

// const ContactListItem = ({ name, number, id, removeContact }) => {
//   const remove = () => {
//     removeContact(id);
//   };
//   return (
//     <li className={styles.contactListItem}>
//       <span className={styles.contactListItemSpan}>{name}</span>:
//       <span className={styles.contactListItemSpan}>{number}</span>
//       <button type="button" className={styles.listItemButton} onClick={remove}>
//         Detete
//       </button>
//     </li>
//   );
// };

// export default ContactListItem;
