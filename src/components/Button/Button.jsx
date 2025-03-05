import PropTypes from 'prop-types'

import './button.css'

const Button = ({label, customBg, handleClick, isRounded = false}) => {
    return (
        <button className={`button ${isRounded && 'button-rounded'}`} style={{backgroundColor:customBg}} onClick={handleClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    customBg: PropTypes.string, // Custom background color
    handleClick: PropTypes.func,
    isRounded: PropTypes.bool,
}
export default Button