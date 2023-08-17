import {useSelector} from "react-redux";
import {selectEmployees} from "../../store/employee/employee.selectors";
import {useParams} from "react-router-dom";


function EmployeeDetailsComponent() {

    const {id} = useParams()

    const employee = useSelector(selectEmployees).filter(employee => employee.id === id);


    return (<>
        <h2>Employee Details</h2>
        <div>
            {
                employee.map(employee => (<div key={employee.id}>
                    <h2>Employee Section</h2>
                    <h3>First Name: {employee.firstName}</h3>
                    <h3>Middle Name: {employee.middleName}</h3>
                    <h3>Last Name: {employee.lastName}</h3>
                    <h3>Location City: {employee.location}</h3>
                    <h3>Address: {employee.address}</h3>
                    <h3>Date Birth: {employee.birthDate}</h3>
                    <h3>Telephone: {employee.telephone}</h3>
                    <br/>
                    <h2>Position Section</h2>
                    <h3>Position Title: {employee.positionTitle}</h3>
                    <h3>Hire Date: {employee.hireDate}</h3>
                    <h3>Email: {employee.email}</h3>
                    <h3>Salary: {employee.salary}</h3>
                    <h3>Time in Position: {employee.timeInPosition}</h3>
                </div>))
            }
        </div>
    </>);
}

export default EmployeeDetailsComponent;
