import React from 'react';
import './VoteButton.css';
import { useDispatch } from 'react-redux';
import { voteAnecdote } from '../../reducers/anecdoteReducer.js';


const VoteButton = ({anecdote}) => {
    const dispatch = useDispatch();
    
    const handleClick = (anecdote) => {

    }

    return (
        <button className="vote-button" onClick={() => dispatch(voteAnecdote(anecdote.id))}>Vote</button>
    );
}

export default VoteButton;
