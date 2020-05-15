
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

export const deleteUser = (id) => {
    return{
        type: 'DELETE_USER',
        id: id
    }
};

export const editUser = (user) => {

    return{
        type: 'EDIT_USER',
        user: user
    }
};