import { arrowDown } from "../../assets/icons"
import Typography from "../Typography/Typography"

const Select = ({ label }) => {
    return (
        <div>
            <Typography text={label} />
            <img src={arrowDown} alt="arrow-down" className="icon" />
        </div>
    )
}

export default Select