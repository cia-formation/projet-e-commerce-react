import PropTypes from 'prop-types'

import './button.css'

const Button = ({label, margin, customBg, customColor, customBorder, handleClick, isRounded = false}) => {
    return (
        <button className={`button ${isRounded && 'button-rounded'}`} style={{backgroundColor:customBg, margin: margin, color:customColor, border:customBorder}} onClick={handleClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    margin: PropTypes.string,
    customBg: PropTypes.string, // Custom background color
    customColor: PropTypes.string, // Custom text color
    customBorder: PropTypes.string, // Custom border color
    handleClick: PropTypes.func,
    isRounded: PropTypes.bool,
}
export default Button