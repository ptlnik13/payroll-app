import {useDispatch, useSelector} from "react-redux";
import {getAllEmployees} from "../../store/employee/employee.actions";
import {selectEmployees, selectSpinner} from "../../store/employee/employee.selectors";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Table} from "react-bootstrap";
import {useEffect} from "react";
import SpinnerFullPageComponent from "../spinnerFullPage/SpinnerFullPage.component";

function EmployeeViewerComponent() {

    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees);
    const isLoading = useSelector(selectSpinner);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllEmployees())
    }, [dispatch]);

    const employeeNavigate = (id) => {
        navigate(`/employee/${id}`)
    }
    const formNavigate = () => {
        navigate('/add')
    }

    return (
        <>
            <h2 className='mb-3'>View Employees Details</h2>
            {
                isLoading ?
                    <SpinnerFullPageComponent/>
                    :
                    <div>
                        <Table striped bordered responsive hover>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Position Title</th>
                                <th>Date Arrival</th>
                                <th>Status</th>
                                <th>Details / Edit</th>
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
                                        <Button variant="outline-primary" onClick={() => employeeNavigate(employee.id)}>Details
                                            / Edit</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        <Button className='mt-3' variant="outline-success" onClick={formNavigate}>Add Employee</Button>
                    </div>
            }

        </>
    );
}

export default EmployeeViewerComponent;
