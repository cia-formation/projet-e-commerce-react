
import { notification } from '../../assets/icons'
import './notification.css'

const Notification = () => {
    return (
        <div className="notification">
            <img src={notification} alt="notification" className="icon" />
            <span></span>
        </div>
    )
}

export default Notification