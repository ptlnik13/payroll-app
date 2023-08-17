import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {selectEmployees} from "../../store/employee/employee.selectors";
import {useNavigate} from "react-router-dom";
import {formValidationsUtils} from "../../utils/formValidations.utils";
import {addEmployee, editEmployee} from "../../store/employee/employee.actions";

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
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="middleName">Middle Name</label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="location">Location City</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="birthDate">Date Birth</label>
                    <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telephone">Telephone</label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="positionTitle">Position Title</label>
                    <input
                        type="text"
                        id="positionTitle"
                        name="positionTitle"
                        value={formData.positionTitle}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hireDate">Hire Date</label>
                    <input
                        type="date"
                        id="hireDate"
                        name="hireDate"
                        value={formData.hireDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
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
                </div>
                <div>
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="timeInPosition">Time in Position</label>
                    <input
                        type="text"
                        id="timeInPosition"
                        name="timeInPosition"
                        value={formData.timeInPosition}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    </>);
}

export default EmployeeFormComponent;
