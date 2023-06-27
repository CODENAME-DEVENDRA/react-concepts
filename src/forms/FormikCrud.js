import { useFormik } from 'formik'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

function FormikCrud() {

    const [data, setData] = useState([])

    const formik = useFormik({
        initialValues: {
            id: "",
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values, { resetForm }) => {

            const alreadyUser = data.find((user) => user.id === values.id)
            console.log(alreadyUser);

            if (alreadyUser) {
                //update
                const updatedUser = data.map((user) => user.id === values.id ? values : user)
                setData(updatedUser)
            } else {
                //create
                const createData = { ...values, id: uuid() }
                setData((prevData) => [...prevData, createData])
            }
            resetForm()
        },

    })

    const handleEdit = (user) => {
        formik.setValues(user)
    }

    const handleDelete = (id) => {
        const deleteData = data.filter((user) => user.id !== id)
        console.log("delete", deleteData);
        setData(deleteData)
    }

    return (
        <>
            <div className='container border border-1 mx-auto w-30 p-3'>
                <form onSubmit={formik.handleSubmit}>
                    {/* username */}
                    <div className='mb-3 w-50 mx-auto'>
                        <label className='form-label'>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                        />
                    </div>

                    {/* email */}
                    <div className='mb-3 w-50 mx-auto'>
                        <label className='form-label'>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                        />
                    </div>

                    {/* password */}
                    <div className='mb-4 w-50 mx-auto'>
                        <label className='form-label'>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className='btn btn-primary w-50' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <ul>
                    {data?.map((user) => {
                        return <li key={user.id}>
                            <span>welcome {user.username} ,</span> <span>{user.email}</span>
                            <button onClick={() => handleEdit(user)}>Edit</button>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default FormikCrud