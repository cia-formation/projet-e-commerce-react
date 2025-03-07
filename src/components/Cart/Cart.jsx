import PropTypes from 'prop-types'
import { cart } from '../../assets/icons'

import './cart.css'

const Cart = ({ indicator }) => {
    return (
        <div className='cart'>
            <img src={cart} alt="cart" className="icon" />
            <span>{indicator}</span>
        </div>
    )
}

Cart.propTypes = {
    indicator: PropTypes.number.isRequired
}

export default Cart