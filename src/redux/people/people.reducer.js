import peopleTypes from "./people.types";

const INITIAL_STATE = {
  list: [],
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case peopleTypes.SET_PEOPLE_DATA:
      return {
        ...state,
        list: action.payload,
      };
    case peopleTypes.ADD_PEOPLE_DATA:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    default:
      return state;
  }
};

export default peopleReducer;
