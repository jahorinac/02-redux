import { fetchAllDataSucess } from './usersActions'


function getAllDAta(){
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchAllDataSucess(data))
            })
    }

}

export default getAllDAta
