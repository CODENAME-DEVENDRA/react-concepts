import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Mount() {

    const [data, setData] = useState([])

    //basic
    // useEffect(() => {
    //     console.log("Component Mounted");
    // }, [])

    // axios
    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data);
        return response.data
    }

    useEffect(() => {
        let flag = false
        fetchData()
            .then((res) => {
                if (!flag) {
                    setData(res)
                    console.log("mounted");
                }
            })
        return () => {
            flag = true
        }
    }, [])


    return (
        <>
            <h1>Mount</h1>
            {data.map((user) => {
                return <h2>{user.name}</h2>
            })}
        </>
    )
}

export default Mount