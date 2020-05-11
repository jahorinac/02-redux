import { deleteUser } from './usersActions'

function deleteData(id) {

    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
    };

    return dispatch => {

        fetch('https://jsonplaceholder.typicode.com/users/' + id, requestOptions)
            .then(response => {
                return response.json()
            })
            .then(() => {
                dispatch(deleteUser(id))
            })
    }
}

export default deleteData