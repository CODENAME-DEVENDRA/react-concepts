import React, { memo } from 'react'

function Header() {
    console.log("HEADER Rendered");
    return (
        <div>useCallback Header</div>
    )
}

// export default Header
export default memo(Header)
