import {useDispatch, useSelector} from "react-redux";
import {getAllEmployees} from "../../store/employee/employee.actions";
import {selectEmployees} from "../../store/employee/employee.selectors";
import {useNavigate} from "react-router-dom";

function EmployeeViewerComponent() {

    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees);
    const navigate = useNavigate();

    dispatch(getAllEmployees());

    const employeeNavigate = (id) => {
        navigate(`/employee/${id}`)
    }
    const formNavigate = () => {
        navigate('/add')
    }

    return (
        <>
            <h2>View Employees Details</h2>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position Title</th>
                        <th>Date Arrival</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.positionTitle}</td>
                            <td>{employee.hireDate}</td>
                            <td>{employee.status}</td>
                            <td>
                                <button onClick={() => employeeNavigate(employee.id)}>Details</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={formNavigate}>Add Employee</button>
            </div>
        </>
    );
}

export default EmployeeViewerComponent;
