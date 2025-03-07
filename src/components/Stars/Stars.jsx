import PropTypes from 'prop-types'
import { halfStar, star } from '../../assets/icons'
import './stars.css'
import Typography from '../Typography/Typography'

const Stars = ({ number, rate }) => {
    function isFloat(value) {
        return typeof value === 'number' && !Number.isInteger(value);
    }

    return (
        <div className="stars">
            <Typography text={`(${rate})`} />
            <div>
                { //Math.floor(number / 1) helps to convert the number to a whole number
                    [...Array(Math.floor(number / 1))].map((_, index) =>
                        <img key={index} src={star} alt="star" className="icon" />
                    )
                }
                {
                    isFloat(number) &&
                    <img src={halfStar} alt="half-star" className="icon" />
                }
            </div>
        </div>
    )
}

Stars.protoTypes = {
    rate: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
}
export default Stars