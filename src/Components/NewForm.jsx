import React, { useState } from 'react'

const data = [
    {
        lable: "Name :- ",
        type: "text",
        placeholder: "name",
        name: "name"
    },
    {
        lable: "Surname :- ",
        type: "text",
        placeholder: "surname",
        name: "surname"
    },
    {
        lable: "Email :- ",
        type: "email",
        placeholder: "email",
        name: "email"
    },
]
const nestedData = [
    {
        lable: "City :- ",
        placeholder: "city",
        name: "city"
    },
    {
        lable: "State :- ",
        type: "text",
        placeholder: "state",
        name: "state"
    },
    {
        lable: "Pincode :- ",
        type: "number",
        placeholder: "pincode",
        name: "pincode"
    },
]

const NewForm = () => {
    const [formData, setFormData] = useState({
        personDetails: {
            name: "",
            surname: "",
            email: "",
        },
    });

    const [nestedForm, setNestedForm] = useState({
        currentAddress: {
            city: "",
            state: "",
            pincode: ""
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            personDetails: {
                ...prevData.personDetails,
                [name]: value,
            },
        }));
    };

    const handleNestedChange = (e) => {
        const { name, value } = e.target;
        setNestedForm((prevData) => ({
            ...prevData,
            currentAddress: {
                ...prevData.currentAddress,
                [name]: value,
            },
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.personDetails.currentAddress = nestedForm.currentAddress
        console.log(formData);
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                {data.map((element, index) => (
                    <div key={index}>
                        <label>{element.lable}</label>
                        <input {...element} value={formData.personDetails[element.name]} onChange={handleChange} />
                    </div>
                ))}
                {nestedData.map((element, index) => (
                    <div key={index}>
                        <label>{element.lable}</label>
                        <input {...element} value={nestedForm.currentAddress[element.name]} onChange={handleNestedChange} />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewForm