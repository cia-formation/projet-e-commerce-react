
import PropTypes from 'prop-types'
import { notification } from '../../assets/icons'
import './notification.css'

const Notification = ({hasNew}) => {
    return (
        <div className="notification">
            <img src={notification} alt="notification" className="icon" />
            {
                hasNew &&
                <span></span>
            }
        </div>
    )
}

Notification.propTypes = {
    hasNew: PropTypes.bool
}

export default Notification