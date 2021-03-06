import { combineReducers } from "redux";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import peopleReducer from "./people/people.reducer";

const rootReducer = {
  people: peopleReducer,
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["people"],
};

export default persistReducer(persistConfig, combineReducers(rootReducer));
