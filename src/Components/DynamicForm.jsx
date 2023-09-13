import React, { useState } from "react";

const DynamicForm = () => {
    const formData = {
        name: { type: "text", name: 'name', placeholder: 'name', },
        email: { type: "email", name: 'email', placeholder: 'Entre email', },
        age: { type: "number", name: 'age', placeholder: 'Entre age', },
        city: { type: "text", name: 'city', placeholder: 'Entre city', },
        state: { type: "text", name: 'state', placeholder: 'Entre state', },
        pincode: { type: "number", name: 'pincode', placeholder: 'Entre pincode', }
    }
    const [formFields, setFormFields] = useState(
        {
            name: '',
            email: '',
            age: '',
            currentAddress: {
                city: '',
                state: '',
                pincode: '',
            },
            permanentAddress: {
                city: '',
                state: '',
                pincode: '',
            },
        },
    )

    const handleFormChange = (e, index) => {
        const { name, value } = e.target
        let data = { ...formFields };
        if (name === 'name' || name === 'email' || name === "age") {
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
                },
            };
        }
        setFormFields(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataToSend = {
            personalDetails: formFields,
        };
        console.log(dataToSend);
    }

    const callBack = (index, key) => {
        return (
            <div key={index}>
                <label>{key} :- </label>
                <input value={formFields?.[key]} onChange={handleFormChange} {...formData?.[key]} />
            </div>
        )
    }

    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    {Object.entries(formFields).map(([key, value], index) => {
                        // console.log(`key = ${key} , value = ${value}, index= ${index}`);
                        return (
                            <div key={index}>
                                {key === "currentAddress" ?
                                    Object.entries(formFields.currentAddress).map(([key, value], index) => {
                                        return callBack(index, key)
                                    })
                                    : key === "permanentAddress" ? Object.entries(formFields.permanentAddress).map(([key, value], index) => {
                                        return callBack(index, key)
                                    })
                                        : callBack(index, key)
                                }
                            </div>
                        )
                    })}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
};

export default DynamicForm;


