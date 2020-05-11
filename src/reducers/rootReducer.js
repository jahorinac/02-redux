import { combineReducers }from 'redux';

const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL_DATA_SUCESS':
            return [
                ...state,
                ...action.users
            ];

        case 'ADD_NEW_USER':
            return [
                ...state,
                action.user
            ];

        default:
            return state
    }
};

export const rootReducer = combineReducers({
    users: usersReducer
});