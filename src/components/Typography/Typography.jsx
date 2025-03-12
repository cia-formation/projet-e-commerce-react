import PropTypes from 'prop-types'
import './typography.css'
import { check } from '../../assets/icons'

const Typography = ({text, color, fontSize, fontWeight, lineHeight, decoration, isChecked}) => {
    return (
        <p className="typography" style={{color: color, fontSize: fontSize, fontWeight: fontWeight, lineHeight: lineHeight, textDecoration: decoration}}>
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
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    lineHeight: PropTypes.string.isRequired,
    decoration: PropTypes.string.isRequired
}

export default Typography