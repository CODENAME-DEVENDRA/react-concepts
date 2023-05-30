import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiAxios() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(data);
    const getData = async () => {

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response);
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message);

        }

    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>

        </>
    )
}

export default ApiAxios