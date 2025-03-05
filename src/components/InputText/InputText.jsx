import PropTypes from "prop-types";

import './input_text.css'

const InputText = ({ label, placeholder, name, type, labelInlined = false }) => {
    return (
        <div className={`input-text ${labelInlined && 'input-text-inlined'}`}>
            <label htmlFor={name}>{label}</label>
            {
                type === 'textarea' ?
                    <textarea name={name} rows="8" placeholder={placeholder}></textarea>
                    :
                    <input type={type} name={name} placeholder={placeholder} />
            }
        </div>
    )
}

InputText.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "email", "password", "number", "file", "textarea"]),
    labelInlined: PropTypes.bool,
};

export default InputText