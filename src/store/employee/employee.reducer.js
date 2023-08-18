import {EMPLOYEE_ACTION_TYPES} from "./employee.types";

const EMPLOYEE_INITIAL_STATE = {
    isLoading: false,
    employees: []
}


export const employeeReducer = (state = EMPLOYEE_INITIAL_STATE, {type, payload} = {}) => {

    switch (type) {
        case EMPLOYEE_ACTION_TYPES.SET_IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case EMPLOYEE_ACTION_TYPES.ADD_EMPLOYEE:
        case EMPLOYEE_ACTION_TYPES.EDIT_EMPLOYEE:
        case EMPLOYEE_ACTION_TYPES.GET_EMPLOYEES:
            return {
                ...state,
                employees: payload,
                isLoading: false,
            }
        default:
            return {
                ...state
            }
    }

}
