import React, { createContext, useState } from 'react'
import Level1 from './Level1';

export const FormContext = createContext()

function BasicForm() {

    const [input, setInput] = useState({
        name: "",
        age: ""
    })
    const [data, setData] = useState([])

    // console.log(input);

    const handleChange = (e) => {
        setInput((inp) => {
            return { ...inp, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, input])
    }

    return (
        <>
            <FormContext.Provider value={data}>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='text' placeholder='Enter Name...' name='name' value={input.name} />
                    <input onChange={handleChange} type='number' placeholder='Enter Age...' name='age' value={input.age} />
                    <button type='submit'>Send</button>
                </form>
                <Level1></Level1>
            </FormContext.Provider>
        </>
    )
}

export default BasicForm