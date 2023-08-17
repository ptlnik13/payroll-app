import {EMPLOYEE_ACTION_TYPES} from "./employee.types";

let createAction = (type, payload) => ({type, payload});


export const getAllEmployees = () => {

    return createAction(EMPLOYEE_ACTION_TYPES.GET_EMPLOYEES, [])
}

export const addEmployee = (employees, newEmployee) => {

    const id = `${+employees.length + 1}`;
    return createAction(EMPLOYEE_ACTION_TYPES.ADD_EMPLOYEE, [...employees, {...newEmployee, id}])
}

export const editEmployee = (employees, employee) => {
    const newEmployeeList = employees.map(data => data.id === employee.id ? employee : data);
    return createAction(EMPLOYEE_ACTION_TYPES.EDIT_EMPLOYEE, newEmployeeList)
}
