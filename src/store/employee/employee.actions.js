import {EMPLOYEE_ACTION_TYPES} from "./employee.types";

let createAction = (type, payload) => ({type, payload});


export const getAllEmployees = () => {

    return createAction(EMPLOYEE_ACTION_TYPES.GET_EMPLOYEES, [])
}
