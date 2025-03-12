import PropTypes from 'prop-types'
import './tag.css'

const Tag = ({ icon, value }) => {
    return (
        <div>
            <img src={icon} alt="tag" className="icon" />
            {
                value &&
                <span>{value}</span>
            }
        </div>
    )
}

Tag.protoTypes = {
    icon: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default Tag