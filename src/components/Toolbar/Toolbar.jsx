import { arrowLeft, bell } from "../../assets/icons"

import './toolbar.css'

const Toolbar = () => {
    return (
        <div className="toolbar">
            <img src={arrowLeft} alt="Arrow left" />
            <img src={bell} alt="Bell" />
        </div>
    )
}

export default Toolbar