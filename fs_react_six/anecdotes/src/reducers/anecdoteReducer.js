import { getAnecdotes } from '../services/anecdoteServices';
 
const anecdotesReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_ANECDOTE":
            return state.concat(action.data);
            break;
        case "VOTE":
            const id = action.data.id;
            const votedAnecdote = state.find(anecdote => anecdote.id === id);
            const newAnecdote = { ...votedAnecdote, vote: votedAnecdote.vote + 1 };
            return state.map(anecdote => anecdote.id !== id ? anecdote : newAnecdote);
            break;
        default:
            return state;
            break;
    }
}




export const addAnecdote = () => {
    return async dispatch => {
        const anecdotes = await getAnecdotes();
        dispatch({
            type: "ADD_ANECDOTE",
            data: anecdotes
        })
    }
}


export const voteAnecdote = (id) => {
    return {
        type: "VOTE",
        data: {
            id
        }
    }
}


export default anecdotesReducer;
