import React, { useState } from "react";

const DynamicForm = () => {

    const formData = {
        name: { type: "text", name: 'name', placeholder: 'name', },
        email: { type: "email", name: 'email', placeholder: 'Entre email', },
        // city:{type:"text", name:'city', placeholder:'Entre city', }
    }
    const [formFields, setFormFields] = useState(
        {
            name: '',
            email: '',
            // currentAddress: {
            //     city: '',
            //     state: '',
            //     pincode: '',
            // },
        },
    )

    const handleFormChange = (e, index) => {
        const { name, value } = e.target
        // console.log(name, index);
        let data = formFields;
        // console.log(data[name] = value);
        setFormFields({
            ...formFields,
            [name]: value
        })
        // data[name] = value;
        // setFormFields(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formFields);
    }

    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    {Object.entries(formFields).map(([key, value], index) => {
                        console.log(`key = ${key} , value = ${value}, index= ${index}`);

                        return (
                            <>
                                <label>{key.toUpperCase()} :- </label>
                                <input value={formFields?.[key]} onChange={handleFormChange} {...formData?.[key]} />
                            </>
                        )
                    })}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
};

export default DynamicForm;
