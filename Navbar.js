import React from "react"
import PropTypes from "prop-types";


function Navbar(props){ // functional component render yok
    return (
        <div>
            <h4>{props.title}</h4>
        </div>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default Props Title"
}
export default Navbar;