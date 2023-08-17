import {Accordion, Col, Row} from "react-bootstrap";
import FormInputComponent from "../formInput/FormInput.component";
import Form from "react-bootstrap/Form";

function EmployeeSectionComponent({employee}) {
    let {firstName, middleName, lastName, location, address, birthDate, telephone} = employee
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>Employee Section</Accordion.Header>
            <Accordion.Body>
                <Form>
                    <Row>
                        <Col lg={4} md={6}>
                            <FormInputComponent
                                label='First Name'
                                type="text"
                                value={firstName}
                                disabled
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <FormInputComponent
                                label='Middle Name'
                                type="text"
                                value={middleName}
                                disabled
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <FormInputComponent
                                label='Last Name'
                                type="text"
                                value={lastName}
                                disabled
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6}>
                            <FormInputComponent
                                label='Address'
                                type="text"
                                value={address}
                                disabled
                            />
                        </Col>
                        <Col lg={6} md={6}>
                            <FormInputComponent
                                label='Location'
                                type="text"
                                value={location}
                                disabled
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6}>
                            <FormInputComponent
                                label='Birth Date'
                                type="text"
                                value={birthDate}
                                disabled
                            />
                        </Col>
                        <Col lg={6} md={6}>
                            <FormInputComponent
                                label='Telephone'
                                type="text"
                                value={telephone}
                                disabled
                            />
                        </Col>
                    </Row>
                </Form>
            </Accordion.Body>
        </Accordion.Item>

    );
}

export default EmployeeSectionComponent;
