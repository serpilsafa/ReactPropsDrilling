import React from 'react'
import PropTypes from 'prop-types'

const Navbar  = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )

}

Navbar.defaultProps ={
    title: "Do not Have Title"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
