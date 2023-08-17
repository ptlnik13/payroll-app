import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {selectEmployees} from "../../store/employee/employee.selectors";
import {useNavigate} from "react-router-dom";
import {formValidationsUtils} from "../../utils/formValidations.utils";
import {addEmployee, editEmployee} from "../../store/employee/employee.actions";
import FormInputComponent from "../formInput/FormInput.component";

const INITIAL_FORM_STATE = {
    firstName: "",
    middleName: "",
    lastName: "",
    location: "",
    address: "",
    birthDate: "",
    telephone: "",
    positionTitle: "",
    hireDate: "",
    email: "",
    status: '',
    salary: "",
    timeInPosition: "",
}

function EmployeeFormComponent({formState}) {

    const [existingEmployee] = formState || [];
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const employees = useSelector(selectEmployees);
    const [formData, setFormData] = useState(existingEmployee || INITIAL_FORM_STATE);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data
        let formValid = formValidationsUtils(formData);
        if (formValid.result) {
            if (existingEmployee) {
                dispatch(editEmployee(employees, formData))
            } else {
                dispatch(addEmployee(employees, formData));
            }
            setTimeout(() => {
                navigation('/');
            }, 1000)
        } else {
            const inputElement = document.getElementById(formValid.id);
            if (inputElement) inputElement.focus();
        }
    };

    return (<>
        <h2>Employees Form</h2>
        <div>
            <form onSubmit={handleSubmit}>
                <FormInputComponent
                    label='First Name'
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required/>
                <FormInputComponent
                    label='Middle Name'
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                />
                <FormInputComponent
                    label='Last Name'
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Location City'
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Address'
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Date Birth'
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Telephone'
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Position Title'
                    type="text"
                    id="positionTitle"
                    name="positionTitle"
                    value={formData.positionTitle}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Hire Date'
                    type="date"
                    id="hireDate"
                    name="hireDate"
                    value={formData.hireDate}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Email'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select an option</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                </select>
                <FormInputComponent
                    label='Salary'
                    type="number"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    required
                />
                <FormInputComponent
                    label='Time in Position'
                    type="text"
                    id="timeInPosition"
                    name="timeInPosition"
                    value={formData.timeInPosition}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    </>);
}

export default EmployeeFormComponent;
