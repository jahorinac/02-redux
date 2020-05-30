import { deleteUser } from '../actions/usersActions'
import firebase from '../firebase'

function deleteData(id) {

    // const requestOptions = {
    //     method: 'DELETE',
    //     headers: {'Content-Type': 'application/json; charset=UTF-8'},
    // };

    return dispatch => {

            // fetch('https://jsonplaceholder.typicode.com/users/' + id, requestOptions)
            //     .then(response => {
            //         return response.json()
            //     })
            //     .then(() => {
            //         dispatch(deleteUser(id))
            //     })

        firebase.firestore().doc(`users/${id}`).delete()
            .then(()=>{
                dispatch(deleteUser(id))
            })

    }
}

export default deleteData