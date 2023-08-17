
const FormInputComponent = ({ label, ...otherProps }) => {
    return (
        <div >
            {label && (
                <label>{label}</label>
            )}
            <input {...otherProps} />
        </div>
    );
};

export default FormInputComponent;
