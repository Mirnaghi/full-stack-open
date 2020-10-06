// filter reducer
const filterReducer = (state = "", action) => {
    switch(action.type){
        case "FILTER":
            return state = action.data.keyword;
            break;
        default:
            return state;
            break;
    }
}

// FILTER action
export const filterAction = (keyword) => {
    return {
        type: "FILTER",
        data: {
            keyword
        }
    }
}

export default filterReducer;
