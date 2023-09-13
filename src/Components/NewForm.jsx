import React, { useState } from 'react'
import Form from '../Reusable/Form';

const NewForm = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        currentAddress: {
            state: '',
            city: '',
            pincode: '',
        },
        permanentAddress: {
            state: '',
            city: '',
            pincode: '',
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        let data = { ...user };
        if (name === 'username' || name === 'email') {
            data = { ...data, [name]: value };
        } else if (name === 'state' || name === 'city' || name === 'pincode') {
            data = {
                ...data,
                currentAddress: {
                    ...data.currentAddress,
                    [name]: value
                },
                permanentAddress: {
                    ...data.permanentAddress,
                    [name]: value
                }
            };
        }
        setUser(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            personalDetails: user,
        };
        console.log(dataToSend);
    };

    const userInputList = [
        {
            label: "Username :- ",
            type: "text",
            placeholder: "username",
            name: "username",
            value: user.username
        },
        {
            label: "Email :- ",
            type: "email",
            placeholder: "email",
            name: "email",
            value: user.email
        },
        {
            label: "City :- ",
            type: "text",
            placeholder: "city",
            name: "city",
            value: user.currentAddress.city
        },
        {
            label: "State :- ",
            type: "text",
            placeholder: "state",
            name: "state",
            value: user.currentAddress.state
        },
        {
            label: "Pincode :- ",
            type: "number",
            placeholder: "pincode",
            name: "pincode",
            value: user.currentAddress.pincode
        },
        {
            label: "City :- ",
            type: "text",
            placeholder: "city",
            name: "p_city",
            value: user.permanentAddress.p_city
        },
        {
            label: "State :- ",
            type: "text",
            placeholder: "state",
            name: "p_state",
            value: user.permanentAddress.p_state
        },
        {
            label: "Pincode :- ",
            type: "number",
            placeholder: "pincode",
            name: "p_pincode",
            value: user.permanentAddress.p_pincode
        },
    ]

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <Form handleChange={handleChange} inputList={userInputList} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewForm







/* <input type='text' placeholder='username' name='username' value={user.username} onChange={handleChange} />
<input type='text' placeholder='email' name='email' value={user.email} onChange={handleChange} />
<input type='text' placeholder='city' name='city' value={user.currentAddress.city} onChange={handleChange} />
<input type='text' placeholder='state' name='state' value={user.currentAddress.state} onChange={handleChange} />
<input type='number' placeholder='pincode' name='pincode' value={user.currentAddress.pincode} onChange={handleChange} />
<input type='text' placeholder='city' name='p_city' value={user.permanentAddress.p_city} onChange={handleChange} />
<input type='text' placeholder='state' name='p_state' value={user.permanentAddress.p_state} onChange={handleChange} />
<input type='number' placeholder='pincode' name='p_pincode' value={user.permanentAddress.p_pincode} onChange={handleChange} /> */