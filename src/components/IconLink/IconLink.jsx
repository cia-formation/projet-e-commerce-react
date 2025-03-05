import PropTypes from 'prop-types'
import './icon_link.css'

const IconLink = ({path, label, icon, isActive=false, isReversed=false}) => {
    return (
        <a href={path} className={`icon-link ${isActive && 'active-icon-link'} ${isReversed && 'reversed-icon-link'}`}>
            <img src={icon} alt={label} />
            <span>{label}</span>
        </a>
    )
}

IconLink.propTypes = {
    path: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    isActive: PropTypes.bool,
    isReversed: PropTypes.bool,
}

export default IconLink