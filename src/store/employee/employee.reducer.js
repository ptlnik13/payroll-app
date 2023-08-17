import {EMPLOYEE_DATA} from "../../data-files/employee-data";
import {EMPLOYEE_ACTION_TYPES} from "./employee.types";

const EMPLOYEE_INITIAL_STATE = {
    employees: EMPLOYEE_DATA
}


export const employeeReducer = (state = EMPLOYEE_INITIAL_STATE, {type, payload} = {}) => {

    switch (type) {
        case EMPLOYEE_ACTION_TYPES.GET_EMPLOYEES:
            return {
                ...state
            }
        case EMPLOYEE_ACTION_TYPES.ADD_EMPLOYEE:
            return {
                ...state,
                employees: payload
            }
        case EMPLOYEE_ACTION_TYPES.EDIT_EMPLOYEE:
            return {
                ...state,
                employees: payload
            }
        default:
            return {
                ...state
            }
    }

}
