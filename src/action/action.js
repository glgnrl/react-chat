import { ADD_GROUP, CHANGE_CURRENT_GROUP, CHANGE_USER, ADD_USER ,ADD_CHAT } from './types';


export const addGroup = (newGroup) => dispatch => {
    dispatch({
        type: ADD_GROUP,
        payload: newGroup

    })
};

export const changeCurrentGroup = (group) => dispatch => {
    dispatch({
        type: CHANGE_CURRENT_GROUP,
        payload: group

    })
};

export const addUser = (newUser) => dispatch => {
    dispatch({
        type: CHANGE_USER,
        payload: newUser

    })
};

export const addNewUser = (user) => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: user

    })
};

export const addChat = (newChat) => dispatch => {
    dispatch({
        type: ADD_CHAT,
        payload: newChat

    })
};