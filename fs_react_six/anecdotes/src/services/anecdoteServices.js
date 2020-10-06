import axios from 'axios';

// base url
const baseUrl = 'http://localhost:3001/anecdotes';

// function to generate ID
const generateId = () => Number((Math.random() * 1000000).toFixed(0));

// retrieve anecdotes from server to store in state
export const getAnecdotes = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}


// create new anecdote
export const newAnecdote = async (newAnecdote) => {
    const anecdoteToCreate = { content: newAnecdote, id: generateId(), vote: 0 };
    const response = await axios.post(baseUrl, anecdoteToCreate);
    return response.data; 
}

// vote anecdote
export const voteAnecdoteInDB = async (anecdote) => {
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, {...anecdote, vote: anecdote.vote + 1})
    console.log('Response of put request: ', response);
}