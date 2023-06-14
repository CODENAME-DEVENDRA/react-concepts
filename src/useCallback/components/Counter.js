import React, { memo } from 'react'

function Counter({ title, count }) {

    console.log(`${title} :${count} Component Rendered`);

    return (
        <div>{title} = {count}</div>
    )
}

// export default Counter;
export default memo(Counter)