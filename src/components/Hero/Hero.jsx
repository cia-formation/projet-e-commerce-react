import { hero } from '../../assets/images'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'
import './hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="action">
                <Typography text={'Grab Upto 50% Off On Selected Headphone'} color={'#3A4980'} fontSize={'34px'} fontWeight={700} lineHeight={'100%'} textAlign={'start'} />
                <Button label={'Buy Now'} customBg={'#3A4980'} customColor={'white'} isRounded width={'auto'} />
            </div>

            <div className="image">
                <img src={hero} alt="Hero image" />
            </div>
        </div>
    )
}

export default Hero