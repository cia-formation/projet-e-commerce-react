import PropTypes from 'prop-types'

import './heading.css'

const Heading = ({label, customColor}) => {
    return (
        <div className='heading'>
            <span style={{backgroundColor: customColor}}></span>
            <h1>{label}</h1>
        </div>
    )
}

Heading.propTypes = {
    label: PropTypes.string,
    customColor: PropTypes.string,
}

export default Heading