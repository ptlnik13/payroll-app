import {useSelector} from "react-redux";
import {selectEmployees} from "../../store/employee/employee.selectors";
import {useParams} from "react-router-dom";
import {useState} from "react";
import EmployeeFormComponent from "../EmployeeForm/EmployeeForm.component";
import EmployeeSectionComponent from "../employeeSection/EmployeeSection.component";
import PositionSectionComponent from "../positionSection/PositionSection.component";
import {Accordion} from "react-bootstrap";
import Button from "react-bootstrap/Button";


function EmployeeDetailsComponent() {

    const [isHidden, setIsHidden] = useState(false)
    const {id} = useParams()

    const [employee] = useSelector(selectEmployees).filter(employee => employee.id === id);

    return (<>
        <h2 className='mb-3'>Employee Details</h2>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <EmployeeSectionComponent employee={employee}/>
            <PositionSectionComponent employee={employee}/>
        </Accordion>

        <Button className='mt-3' variant="outline-dark" onClick={() => setIsHidden(!isHidden)}>Edit Employee</Button>
        {
            isHidden && <EmployeeFormComponent formState={employee}/>
        }
    </>);
}

export default EmployeeDetailsComponent;
