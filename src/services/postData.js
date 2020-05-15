import { addNewUser } from '../actions/usersActions'

function postData(user){

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(user)
    };

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
            .then(response => response.json())
            .then(data => {
                dispatch(addNewUser(data))
            })
    }

}

export default postData