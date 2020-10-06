import { actionCreater } from 'react-redux';

const notificationReducer = (state = "", action) => {
    switch(action.type){
        case "ADD_NOTIFICATION":
            return state = action.data.notification;
            break;
        default:
            return state;
            break;
    }
}


export const addNotification = (notification) => {
    return {
        type: "ADD_NOTIFICATION",
        data: {
            notification
        }
    }
}


export default notificationReducer;
