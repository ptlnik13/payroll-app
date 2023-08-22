# Project Name

#### Payroll System

## Getting Started

### 1. To start the project, run the following command in your terminal:

   ```shell
   npm run server ## This will run localhost:8000/employee server
   npm start ## This will run React Front End application
   ```
1. The first step we have to Run Server on Port 8000, so we can fetch existing Employee data.
   *  To view data, http://localhost:8000/employee
2. The project will start, and you can view it in your browser at http://localhost:3000

### 2. Backend Data Mocking:

This project Mock data by using NPM package `json-server` module.

To simulate API data, the data is stored in the file `src/data-files/employee-data.json`.

## About:
This project is built using React and Redux for state management. 

It provides Global state management system.

### 1. Initial state.
In Initial state, redux-thunk fetches the initial data from `src/data-files/employee-data.json`, by Axios.

which stores into Redux and renders the initial stage.

### 2. Detail Employee.
In Detail an Employee section, user can click on `Details / Edit` button from employee table,
And it re-directs to next page `/employee/:id`

It takes the `employees` data from `redux` and filtered out the only employee by help of `:id` params.
By the help of`Array.filter()` method.

### 3. Add Employee.
In Add an Employee section, you can Redirect to the page via help of `Add Employee` button on `Index` page.

In this section, you can add employee into `redux` state by help of `employee/ADD_EMPLOYEE` action type.

All the form fields in this section are mandatory,
and extra form validation has been done by `src/utils/formValidations.utils.js` file.


### 4. Edit Employee.
In this section, you are already on the detail page. e.g. `/employee/:id` page.

On Top right corner, when you click on `Edit Employee` button, `onClick` function will run and
toggle `isHidden` state to `true/false` vice versa.

if `isHidden === true` you will see the Edit form, if `false` then Detail page view will be served.


All the form fields in this section are mandatory,
and extra form validation has been done by `src/utils/formValidations.utils.js` file.

If Validation goes successful, then `dispatch` triggers the action `employee/EDIT_EMPLOYEE`.

## Features:
* See Current Employees.


* Edit Current Employees.


* Add New Employees.

## Usage:
A company has a payroll software to add/view/edit employee information.

## Technology/Libraries Used:
* React version ^18.2.0
* Redux version ^4.2.1
* Redux Thunk ^2.4.2
* React Router Dom version ^6.15.0
* BootStrap version 5.3.1

## Folder Structure:
* `src/` : Main source code directory.
  * `components/` React Components.
    * `employeeDetails` Detail view of single employee.
    * `employeeForm` Employee form used for add/edit employee.
    * `employeeSection` Renders the basic employee details.
    * `employeeViewer` All employees stores in table format on index page.
    * `formInput` Form component for `<input />` and `<section />`.
    * `positionSection` Renders the employee's position details.
  * `data-files/` Mockup Data as API call.
  * `store/` Redux logic.
    * `employee/` Employee Redux workflow.
      * `employee.actions` All the Reducer's Action at one place.
      * `employee.reducer` Employee Reducer logic.
      * `employee.selectors` All the Selectors for getStateToProps.
      * `employee.types` All Action Type defined at central place.
    * `root-reducer.js` Combining all the reducers.
    * `store.js` Create store for Providers.
  * `utils/` Utility functions.
  * `app.js` Combine all the components with react-router.
  * `index.js` Entry point.
