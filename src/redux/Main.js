import React from 'react'
import { Provider } from "react-redux"
import { BasicStore } from './basic-redux/ReduxStore'
import ReduxComp from './basic-redux/ReduxComp'


function Main() {
    return (
        <>
            <Provider store={BasicStore}>
                <ReduxComp />
            </Provider>
        </>
    )
}

export default Main