import { combineReducers }from 'redux';

const usersReducer = (state = [], action) => {

    console.log(state)

    console.log(action)

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

        case 'DELETE_USER':
            return [
                ...state.filter(user => user.id !== action.id)
            ];

        default:
            return state
    }
};

export const rootReducer = combineReducers({
    users: usersReducer
});