import React from 'react';
import './InputField.css';

const InputField = ({handleSubmit, handleNameChange, handleNumberChange}) => {
    return(
        <form onSubmit={handleSubmit}>
            
            <div ><span>Name: </span><input onChange={handleNameChange}className="InputField" /></div> 
            <div className="InputDiv"><span>Number: </span><input onChange={handleNumberChange}className="InputField" /></div> 
            <button type="submit" className="Button">Add</button>
        </form>
    );
}

export default InputField;