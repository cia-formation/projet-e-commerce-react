import PropTypes from 'prop-types'
import './typography.css'
import { check } from '../../assets/icons'

const Typography = ({text, color, fontSize, fontWeight, decoration, textAlign, isChecked}) => {
    return (
        <p className="typography" style={{color: color, fontSize: fontSize, fontWeight: fontWeight, textDecoration: decoration, textAlign: textAlign}}>
            {
                isChecked &&
                <img src={check} alt="check" className="icon"/>
            }
            {text}
        </p>
    )
}

Typography.protoTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    weight: PropTypes.number,
    textAlign: PropTypes.string,
    decoration: PropTypes.string
}

export default Typography