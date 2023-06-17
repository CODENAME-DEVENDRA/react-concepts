import React from 'react'
import { Provider } from "react-redux"
import { BasicStore } from './basic-redux/ReduxStore'
import ReduxComp from './basic-redux/ReduxComp'
import SliceComponent from './advance-redux/SliceComponent'
import { sliceStore } from './advance-redux/sliceStore'


function Main() {
    return (
        <>
            {/* basic redux */}
            {/* <Provider store={BasicStore}>
                <ReduxComp />
            </Provider> */}

            {/* advance redux */}
            <Provider store={sliceStore}>
                <SliceComponent />
            </Provider>


        </>
    )
}

export default Main