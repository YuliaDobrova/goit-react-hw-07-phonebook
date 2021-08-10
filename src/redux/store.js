import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["items"],
// };
// const rootReducer = contactsReducer;

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: contactsReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

export default store;

// ===========================
// json смотреть по ссылке
// http://localhost:4040/contacts
