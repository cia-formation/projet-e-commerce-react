
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './pagination.css'

const Pagination = ({pages, activePage}) => {
    return (
        <div className='pagination'>
            <Button label={'Previous'} customBg={'white'} customBorder={'1px solid #F3F3F3'} customColor={'#667085'}/>
            {
                [...Array(pages).keys()].map(page => {
                    if (page + 1 === activePage) {
                        return <span className='active'>{page + 1}</span>
                    } else {
                        return <span>{page + 1}</span>
                    }
                })
            }
            <Button label={'Next'} customBg={'white'} customBorder={'1px solid #F3F3F3'} customColor={'#667085'} />
        </div>
    )
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired
}
export default Pagination