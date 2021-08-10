import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.loading;
export const getFilter = (state) => state.filter;
export const getAllContacts = (state) => state.items;

// export const getVisibleContacts = (state) => {
//   const allContacts = getAllContacts(state);
//   const filter = getFilter(state);

//   return allContacts.filter((item) =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// Мемоизация
export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
