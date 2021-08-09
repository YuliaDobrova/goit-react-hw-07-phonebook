import React from "react";
import styles from "./FIlter.module.css";
import { connect } from "react-redux";
import { setFilter } from "../../redux/phonebook/phonebookActions";

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
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter: setFilter })(Filter);
