import {Accordion, Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormInputComponent from "../formInput/FormInput.component";


function PositionSectionComponent({employee}) {
    let {positionTitle, hireDate, email, salary, timeInPosition} = employee;
    return (
        <Accordion.Item eventKey='1'>
            <Accordion.Header>Position Section</Accordion.Header>
            <Accordion.Body>
                <Form>
                    <Row>
                        <Col lg={6} md={6}>
                            <FormInputComponent
                                label='Position Title'
                                type="text"
                                value={positionTitle}
                                disabled
                            />
                        </Col>
                        <Col lg={6} md={6}>
                            <FormInputComponent
                                label='Hired Date'
                                type="text"
                                value={hireDate}
                                disabled
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <FormInputComponent
                                label='Email'
                                type="text"
                                value={email}
                                disabled
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6}>
                            <FormInputComponent
                                label='Salary'
                                type="text"
                                value={salary}
                                disabled
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <FormInputComponent
                                label='Time in Position'
                                type="text"
                                value={timeInPosition}
                                disabled
                            />
                        </Col>
                    </Row>
                </Form>
            </Accordion.Body>
        </Accordion.Item>

    );
}

export default PositionSectionComponent;
