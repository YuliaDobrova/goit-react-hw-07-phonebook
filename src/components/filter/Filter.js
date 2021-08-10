import React from "react";
import styles from "./FIlter.module.css";
import { connect } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";

const Filter = ({ filter, setFilter }) => {
  return (
    <>
      <label className={styles.filterName}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

export default connect(mapStateToProps, { setFilter: setFilter })(Filter);
