import PropTypes from 'prop-types'

import './button.css'

const Button = ({label, customBg, isRounded = false}) => {
    return (
        <button className={`button ${isRounded && 'button-rounded'}`} style={{backgroundColor:customBg}}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    customBg: PropTypes.string, // Custom background color
    isRounded: PropTypes.bool,
}
export default Button