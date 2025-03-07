import PropTypes from 'prop-types'
import './typography.css'

const Typography = ({text, color, fontSize, weight, lineHeight, decoration}) => {
    return (
        <p className="typography" style={{color: color, fontSize: fontSize, fontWeight: weight, lineHeight: lineHeight, textDecoration: decoration}}>
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