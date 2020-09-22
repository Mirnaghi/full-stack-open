import React from 'react';
import './Anecdotes.css';
import VoteButton from '../VoteButton/VoteButton';


const AnecdoteCard = () => {
    return (
        <div className="anecdote-card">
            <h3>
                This is example note
            </h3>
            <VoteButton />
        </div>
    );
}

const Anecdotes = () => {
    return (
        <div className="anecdotes">
            <AnecdoteCard />
            <AnecdoteCard />
            <AnecdoteCard />
        </div>
        
    );
}

export default Anecdotes;
