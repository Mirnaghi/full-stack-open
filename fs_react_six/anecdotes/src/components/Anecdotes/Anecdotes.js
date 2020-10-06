import React from 'react';
import './Anecdotes.css';
import VoteButton from '../VoteButton/VoteButton';
import { useSelector } from 'react-redux';

import { sortAnecdotes } from '../../utils/sortAnecdotes';
 

const AnecdoteCard = ({anecdote, vote, id}) => {
    return (
        <div className="anecdote-card">
            <h3 key={id}>
                {anecdote}
            </h3>
            <p>has {vote} votes: <VoteButton anecdote={{content: anecdote, id: id, vote: vote }}/></p>
        </div>
    );
}

const Anecdotes = () => {
    // state values
    const anecdotes = useSelector(state => state.anecdotes);
    const filterKeyword = useSelector(state => state.filter);

    // variable to save anecdotes to show user
    let anecdotesToShow = [];

    // filter anecdotes 
    function showAnecdote(){
        if(filterKeyword === "" ){
            anecdotesToShow = anecdotes;
        } else {
            anecdotesToShow = anecdotes.filter(anecdote => anecdote.content.includes(filterKeyword));
        }

        // sort anecdotesToShow
        anecdotesToShow = sortAnecdotes(anecdotesToShow);

        // return list of sorted anecdotes
        return anecdotesToShow.map(anecdote => {
            return <AnecdoteCard id={anecdote.id} anecdote={anecdote.content} vote={anecdote.vote}/>
        });
    }

    return (
        <div className="anecdotes">
          {showAnecdote()}
        </div>

    );
}

export default Anecdotes;
