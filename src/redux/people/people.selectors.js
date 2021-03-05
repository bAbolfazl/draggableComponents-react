import { createSelector } from "reselect"

const selectPeople = state => state.people

export const selectPeopleList = createSelector(
 selectPeople,
 people => people.list 
)