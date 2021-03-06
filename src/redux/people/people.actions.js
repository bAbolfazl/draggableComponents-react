import peopleTypes from "./people.types";

export const setPeopleList = (people) => ({
  type: peopleTypes.SET_PEOPLE_DATA,
  payload: people,
});
export const addPeopleList = (person) => ({
  type: peopleTypes.ADD_PEOPLE_DATA,
  payload: person,
});
