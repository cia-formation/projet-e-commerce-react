import { user } from '../../assets/images'
import Typography from '../Typography/Typography'

import './user.css'
const User = ({ userName }) => {
    return (
        <div className="user">
            <img src={user} alt="user" className="icon" />
            <div>
                <Typography text="Good Morning!" color={'#C0C3C6'} fontSize={'14px'} weight={500} lineHeight={'14.52px'} />
                <Typography text={userName} color={'#1D364D'} fontSize={'16px'} weight={600} lineHeight={'19.36px'}/>
            </div>
        </div>
    )
}

export default User