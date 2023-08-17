import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";

const FormInputComponent = ({label, element, ...otherProps}) => {

    if (element === 'select') {
        return (
            <InputGroup className='mb-3'>
                <InputGroup.Text>Status</InputGroup.Text>
                <Form.Select {...otherProps}>
                    <option value=''>Select an option</option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                    <option value='Contract'>Contract</option>
                </Form.Select>
            </InputGroup>
        );
    } else {
        return (
            <InputGroup className='mb-3'>
                <InputGroup.Text>{label}</InputGroup.Text>
                <Form.Control {...otherProps} />
            </InputGroup>

        );
    }

};

export default FormInputComponent;
