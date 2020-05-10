
export const fetchAllDataSucess = (data) => {

    return{
        type: 'FETCH_ALL_DATA_SUCESS',
        users: data
    }
};