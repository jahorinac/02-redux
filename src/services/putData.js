import { editUser } from "../actions/usersActions";


function putData(user){

    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    };

    console.log('https://jsonplaceholder.typicode.com/users/' + user.id)

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users/' + user.id, requestOptions)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                dispatch(editUser(data))
            })
    }
}

export default putData