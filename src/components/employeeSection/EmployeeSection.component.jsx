import {Accordion} from "react-bootstrap";

function EmployeeSectionComponent({employee}) {
    let {firstName, middleName, lastName, location, address, birthDate, telephone} = employee
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>Employee Section</Accordion.Header>
            <Accordion.Body>
                <h3>First Name: {firstName}</h3>
                <h3>Middle Name: {middleName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Location City: {location}</h3>
                <h3>Address: {address}</h3>
                <h3>Date Birth: {birthDate}</h3>
                <h3>Telephone: {telephone}</h3>
            </Accordion.Body>
        </Accordion.Item>

    );
}

export default EmployeeSectionComponent;
