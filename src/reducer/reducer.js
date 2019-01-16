import { ADD_GROUP, CHANGE_CURRENT_GROUP, CHANGE_USER, ADD_USER, ADD_CHAT} from '../action/types';

const initialState ={
    chats: [],
    groups: [],
    users:[],
    currentGroup:{},
    currentUser:{}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_GROUP:
        return {
            ...state,
            groups: [ ...state.groups, action.payload ]
        }
        
        case CHANGE_CURRENT_GROUP:
        return {
            ...state,
            currentGroup: action.payload
        }

        case ADD_USER:
        return {
            ...state,
            newUser: [...state.users, action.payload]
        }

        case CHANGE_USER:
        return {
            ...state,
            currentUser: action.payload
        }

        case ADD_CHAT:
        return {
            ...state,
            chats: [...state.chats, action.payload]
        }
        default: 
        return state;
    }
}