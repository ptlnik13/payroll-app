import {Accordion} from "react-bootstrap";


function PositionSectionComponent({employee}) {
    let {positionTitle, hireDate, email, salary, timeInPosition} = employee;
    return (
        <Accordion.Item eventKey='1'>
            <Accordion.Header>Position Section</Accordion.Header>
            <Accordion.Body>
                <h3>Position Title: {positionTitle}</h3>
                <h3>Hire Date: {hireDate}</h3>
                <h3>Email: {email}</h3>
                <h3>Salary: ${salary}</h3>
                <h3>Time in Position: {timeInPosition}</h3>
            </Accordion.Body>
        </Accordion.Item>

    );
}

export default PositionSectionComponent;
