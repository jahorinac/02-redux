
export const fetchAllDataSucess = (data) => {

    return{
        type: 'FETCH_ALL_DATA_SUCESS',
        users: data
    }
};

export const addNewUser = (user) => {

    return{
        type: 'ADD_NEW_USER',
        user: user
    }
};