import { addNewUser } from '../actions/usersActions'
import firebase from '../firebase'

function postData(user){

    // const requestOptions = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json; charset=UTF-8'},
    //     body: JSON.stringify(user)
    // };

    return dispatch => {

            //     fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
            //         .then(response => response.json())
            //         .then(data => {
            //             dispatch(addNewUser(data))
            //         })

        firebase.firestore().doc(`users/${user.id}`).set(user)
            .then(() => {
                dispatch(addNewUser(user))
            })
    }
}

export default postData