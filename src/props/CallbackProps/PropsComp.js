import React, { useState } from 'react'
import PropsSibling1 from './PropsSibling1'
import PropsSibling2 from './PropsSibling2'

function PropsComp() {
    //1
    const [data, setData] = useState("")
    // console.log(data);
    // console.log(setData);
    // console.log(useState());

    const parentStore = (d) => {
        // console.log("parent", d);
        setData(d)
    }

    return (
        <div>
            <h1>PropsComp</h1>
            <PropsSibling1 parentStore={parentStore} />
            <PropsSibling2 data={data} />
        </div>
    )
}

export default PropsComp