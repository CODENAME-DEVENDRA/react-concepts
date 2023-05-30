import React, { useEffect, useState } from 'react'

function ApiFetch() {

    const [data, setData] = useState(null)
    console.log(data);
    const getData = async () => {
        try {

            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setData(data)

        } catch (error) {
            console.log(error);
        }

    }



    useEffect(() => {
        getData()
    }, [])


    return (
        <>

        </>
    )
}

export default ApiFetch

//URL="https://jsonplaceholder.typicode.com/users"

//useEffect

//ComponentDidMount
//ComponentDidUpdate
//ComponentWillUnmount