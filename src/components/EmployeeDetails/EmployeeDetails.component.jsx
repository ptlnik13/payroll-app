import {useSelector} from "react-redux";
import {selectEmployees, selectSpinner} from "../../store/employee/employee.selectors";
import {useParams} from "react-router-dom";
import {useState} from "react";
import EmployeeFormComponent from "../EmployeeForm/EmployeeForm.component";
import EmployeeSectionComponent from "../employeeSection/EmployeeSection.component";
import PositionSectionComponent from "../positionSection/PositionSection.component";
import {Accordion} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SpinnerComponent from "../spinner/Spinner.component";


function EmployeeDetailsComponent() {

    const [isHidden, setIsHidden] = useState(false)
    const {id} = useParams()
    const isLoading = useSelector(selectSpinner);

    const [employee] = useSelector(selectEmployees).filter(employee => employee.id === id);

    return (<>
        <Button className='mt-3 float-end' variant="outline-dark"
                onClick={() => setIsHidden(!isHidden)}>{isHidden ? 'Back' : 'Edit Employee'}</Button>
        <h2 className='mb-3'>Employee Details</h2>
        {
            isLoading ? <SpinnerComponent/> : (isHidden ? (<EmployeeFormComponent formState={employee}/>) : (
                <Accordion className='mt-5' defaultActiveKey={['0']} alwaysOpen>
                    <EmployeeSectionComponent employee={employee}/>
                    <PositionSectionComponent employee={employee}/>
                </Accordion>
            ))
        }
    </>);
}

export default EmployeeDetailsComponent;
