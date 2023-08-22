import {useDispatch, useSelector} from "react-redux";
import {selectEmployees, selectSpinner} from "../../store/employee/employee.selectors";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import EmployeeFormComponent from "../EmployeeForm/EmployeeForm.component";
import EmployeeSectionComponent from "../employeeSection/EmployeeSection.component";
import PositionSectionComponent from "../positionSection/PositionSection.component";
import {Accordion} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SpinnerComponent from "../spinner/Spinner.component";
import {getAllEmployees} from "../../store/employee/employee.actions";


function EmployeeDetailsComponent() {

    const [isHidden, setIsHidden] = useState(false)
    const {id} = useParams()
    const isLoading = useSelector(selectSpinner);
    const dispatch = useDispatch();
    const [employee] = useSelector(selectEmployees).filter(employee => employee.id === id);

    useEffect(() => {
        dispatch(getAllEmployees());
    }, [dispatch, id]);

    return (<>
        <Button className='mt-3 float-end' variant="outline-dark"
                onClick={() => setIsHidden(!isHidden)}>{isHidden ? 'Back' : 'Edit Employee'}</Button>
        <h2 className='mb-3'>Employee Details</h2>
        {
          isLoading ? <SpinnerComponent/> : (isHidden ? (<EmployeeFormComponent formState={employee}/>) : employee && (
                <Accordion className='mt-5' defaultActiveKey={['0']} alwaysOpen>
                    <EmployeeSectionComponent employee={employee}/>
                    <PositionSectionComponent employee={employee}/>
                </Accordion>
            ))
        }
    </>);
}

export default EmployeeDetailsComponent;
