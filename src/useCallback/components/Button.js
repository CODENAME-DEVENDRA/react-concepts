import React, { memo } from 'react'

function Button({ clickFunction, children }) {
    console.log(`${children} Rendered`);
    return (
        <>
            <button onClick={clickFunction}>{children}</button>
        </>
    )
}

// export default Button;
export default memo(Button)