import {EMPLOYEE_ACTION_TYPES} from "./employee.types";
import axios from "axios";

let createAction = (type, payload) => ({type, payload});


export const getAllEmployees = () => {

    return async function (dispatch) {
        dispatch(createAction(EMPLOYEE_ACTION_TYPES.SET_IS_LOADING))

        //API calls
        let res = await axios.get(`http://localhost:8000/employee`);
        const {data} = await res;
        dispatch(createAction(EMPLOYEE_ACTION_TYPES.GET_EMPLOYEES, data));
    }

}

export const addEmployee = (employees, newEmployee) => {

    const id = `${+employees.length + 1}`;
    return createAction(EMPLOYEE_ACTION_TYPES.ADD_EMPLOYEE, [...employees, {...newEmployee, id}])
}

export const editEmployee = (employees, employee) => {
    const newEmployeeList = employees.map(data => data.id === employee.id ? employee : data);
    return createAction(EMPLOYEE_ACTION_TYPES.EDIT_EMPLOYEE, newEmployeeList)
}
