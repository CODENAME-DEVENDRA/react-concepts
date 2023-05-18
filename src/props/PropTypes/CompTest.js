import React from 'react'
import PropTypes from "prop-types"

function CompTest({ str, num, boolean, arr, obj }) {

    console.log(str, num, boolean, arr, obj);
    return (
        <div>CompTest</div>
    )
}

CompTest.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
    boolean: PropTypes.bool,
    arr: PropTypes.array,
    obj: PropTypes.object
}

export default CompTest