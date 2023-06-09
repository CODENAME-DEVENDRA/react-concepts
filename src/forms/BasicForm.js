import React, { useState } from 'react'

function BasicForm() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [data, setData] = useState([])

    // console.log(Object.keys(formData));

    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        const { name, value } = e.target
        // setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormData((prev) => ({ ...prev, [name]: value }))
        // alert(JSON.stringify(formData))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
    }

    // const arr1 = [1, 2, 3]
    // const arr2 = [4, 5, 6]
    // const arr = [...arr1, ...arr2]
    // console.log(arr);

    const [selected, setSelected] = useState("")
    const handleRadioChange = (e) => {
        setSelected(e.target.value)
    }
    console.log("radio", selected);

    const handleReset = () => {
        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input name='username' value={formData.username} type='text' onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input name='email' value={formData.email} type='email' onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input name='password' value={formData.password} type='password' onChange={handleChange} />
                </label>
                <br />
                <button type='submit'> Submit</button>
                <button onClick={handleReset} type='reset'> Reset</button>


                <label htmlFor="abc">Color</label>
                <input type='color' id='abc' />

                <label>
                    <input
                        type='radio'
                        value="male"
                        onChange={handleRadioChange}
                        checked={selected === "male"}
                    />
                    Male
                </label>
                <label>
                    <input
                        type='radio'
                        value="female"
                        onChange={handleRadioChange}
                        checked={selected === "female"}

                    />
                    Female
                </label>

            </form>
            <div>
                {/* {JSON.stringify(formData)} */}
                {/* {Object.keys(formData).map((item) => {
                    return <ul>
                        <li>{formData[item]}</li>
                    </ul>
                })} */}

                {data.map((item, i) => {
                    console.log(item);
                    return <ul key={i}>
                        <li>{item.username}</li>
                        <li>{item.email}</li>
                        <li>{item.password}</li>
                    </ul>
                })}

            </div>
        </>
    )
}

export default BasicForm