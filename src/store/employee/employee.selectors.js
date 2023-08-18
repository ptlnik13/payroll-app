import {createSelector} from "reselect";

const selectEmployeeReducer = state => state.employee;

export const selectEmployees = createSelector(
    [selectEmployeeReducer],
    data => data.employees
)

export const selectSpinner = createSelector(
    [selectEmployeeReducer],
    data => data.isLoading
)
