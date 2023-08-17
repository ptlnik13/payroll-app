import {combineReducers} from "redux";
import {employeeReducer} from "./employee/employee.reducer";


export const rootReducer = combineReducers({
    employee: employeeReducer
})
