import PropTypes from 'prop-types'
import { like } from '../../assets/icons'
import Typography from '../Typography/Typography'
import Stars from '../Stars/Stars'
import Button from '../Button/Button'

// STYLES
import './product.css'

const Product = ({image}) => {
    return (
        <div className='product'>
            <div className="image">
                <img src={image} alt="product image" />
                <img src={like} alt="like image" />
            </div>
            <div className="info">
                <div>
                    <Typography text={'67 500 FCFA'} />
                    <Stars number={4.5} rate={121}/>
                </div>
                <Typography text={'TDX Sinkers'} />
                <Typography text={'5 types of shoos available'} />

                <Button label={'Ajouter au panier'} isRounded customBg={'#3A4980'} />
            </div>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Product