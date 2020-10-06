export function sortAnecdotes(anecdotes){
    return anecdotes.sort((a, b) => (a.vote > b.vote) ? 1 : -1);
}