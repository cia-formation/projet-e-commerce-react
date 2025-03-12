import PropTypes from 'prop-types'
import './tag.css'

const Tag = ({ icon, value, color }) => {
    return (
        <div className="tag" style={{backgroundColor: `${color}30`}}>
            <img src={icon} alt="tag" className="icon" />
            {
                value &&
                <span style={{color: color}}>{value}</span>
            }
        </div>
    )
}

Tag.protoTypes = {
    icon: PropTypes.string.isRequired,
    value: PropTypes.string,
    color: PropTypes.string,
}

export default Tag