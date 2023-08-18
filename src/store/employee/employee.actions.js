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

    return async function (dispatch,) {
        dispatch(createAction(EMPLOYEE_ACTION_TYPES.SET_IS_LOADING))
        let setNewEmployee = {...newEmployee, id}
        let res = await axios.post(`http://localhost:8000/employee`, setNewEmployee);
        if (res.status === 200) {
            dispatch(createAction(EMPLOYEE_ACTION_TYPES.ADD_EMPLOYEE, [...employees, setNewEmployee]))
        }
    }


}

export const editEmployee = (employees, employee) => {

    return async function (dispatch) {
        dispatch(createAction(EMPLOYEE_ACTION_TYPES.SET_IS_LOADING))
        let res = await axios.put(`http://localhost:8000/employee/${employee.id}`, employee)
        if (res.status === 200) {
            const newEmployeeList = employees.map(data => data.id === employee.id ? employee : data);
            dispatch(createAction(EMPLOYEE_ACTION_TYPES.EDIT_EMPLOYEE, newEmployeeList))
        }
    }
}
