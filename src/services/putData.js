import { editUser } from "../actions/usersActions";
import firebase from '../firebase';


function putData(user){

    // const requestOptions = {
    //     method: 'PUT',
    //     body: JSON.stringify(user),
    //     headers: {'Content-Type': 'application/json; charset=UTF-8'}
    // };

    return dispatch => {

            // fetch('https://jsonplaceholder.typicode.com/users/' + user.id, requestOptions)
            //     .then(response => {
            //         return response.json()
            //     })
            //     .then(data => {
            //         dispatch(editUser(data))
            //     })

        firebase.firestore().doc(`users/${user.id}`).update(user)
            .then(()=>{
                dispatch(editUser(user));
        })
    }
}

export default putData