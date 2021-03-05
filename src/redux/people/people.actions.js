import peopleTypes from "./people.types";

export const setPeopleList = (people) => ({
    type: peopleTypes.SET_PEOPLE_DATA,
    payload: people
})