import { arrowDown } from "../../assets/icons"
import Typography from "../Typography/Typography"

import './select.css'
const Select = ({ label }) => {
    return (
        <div className="select">
            <Typography text={label} weight={500}/>
            <img src={arrowDown} alt="arrow-down" className="icon" />
        </div>
    )
}

export default Select