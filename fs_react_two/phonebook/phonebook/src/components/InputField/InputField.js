import React from 'react';
import './InputField.css';

const InputField = ({handleSubmit, handleNameChange, handleNumberChange}) => {
    return(
        <form onSubmit={handleSubmit}>
            
            <div>Name: <input onChange={handleNameChange}className="InputField" /></div> 
            <div>Number: <input onChange={handleNumberChange}className="InputField" /></div> 
            <button type="submit" className="Button">Add</button>
        </form>
    );
}

export default InputField;