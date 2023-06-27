import React from 'react'
import { Form, useActionData } from 'react-router-dom'

function Add() {

    const data = useActionData()
    console.log(data?.getData)
    console.log(data?.error);

    return (
        <>
            <h1>Add</h1>
            <Form method='post' action='/contact/add'>
                <label>
                    Name
                    <input type='text' name="username" />
                </label>
                <br />
                <label>
                    Email
                    <input type='email' name='email' />
                </label>
                <br />
                <button>Submit</button>
            </Form>

            <div>
                {data?.error && <div>{data?.error}</div>}
            </div>
        </>
    )
}

export default Add

export const connectAction = async ({ request }) => {

    // console.log(request);
    const data = await request.formData()
    // console.log(data);

    const getData = {
        username: data.get("username"),
        email: data.get("email")
    }
    // console.log(getData)

    if (getData.email == "" || getData.username == "") {
        return { error: "Please enter details" }
    }

    if (!getData.email == "" && !getData.username == "") {
        return { getData }
    }

}