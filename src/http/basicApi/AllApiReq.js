import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AllApiReq() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(data);

    const getData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(response);
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message);
        }

    }

    const postData = async (d) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", d)
            console.log(response);
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message);
        }

    }

    // const patchData = async (d) => {
    //     try {
    //         const response = await axios.patch("https://jsonplaceholder.typicode.com/posts/1", d)
    //         console.log(response);
    //         setData(response.data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error.message);
    //     }

    // }

    const putData = async (d) => {
        try {
            const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", d)
            console.log(response);
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message);
        }

    }

    const deleteData = async () => {
        try {
            const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
            console.log(response);
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message);
        }

    }


    const handleClick = () => {
        // getData()
        // postData({ id: 1, body: "lorem ipsum", title: "axios post" })
        // patchData({ title: "axios patch" })
        // putData({ id: 1, body: "first put", title: "axios put" })
        // deleteData()
    }


    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default AllApiReq;
