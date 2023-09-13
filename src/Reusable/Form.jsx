import React from "react";

const Form = ({ inputList, handleChange }) => {
    return (
        <>
            {inputList.map((element, index) => (
                <div key={index}>
                    <label>{element.label}</label>
                    <input {...element} onChange={handleChange} />
                </div>
            ))}
        </>
    )
};

export default Form;
