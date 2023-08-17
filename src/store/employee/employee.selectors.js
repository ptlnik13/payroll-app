import {createSelector} from "reselect";

const selectEmployeeReducer = state => state.employee;

export const selectEmployees = createSelector(
    [selectEmployeeReducer],
    data => data.employees
)

