import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../../reducers/anecdoteReducer';

import { newAnecdote } from '../../services/anecdoteServices';

const InputField = () => {
    const dispatch = useDispatch();

    const addNewAnecdote = async (event) => {
        event.preventDefault();
        let content = event.target.anecdoteText.value;
        const createdAnecdote = await newAnecdote(content);
        dispatch(addAnecdote(createdAnecdote));
    }

    return (
        <form onSubmit={addNewAnecdote}>
            <input name="anecdoteText"></input>
            <button type="submit">ADD ANECDOTE</button>
        </form>
    );
}

export default InputField;