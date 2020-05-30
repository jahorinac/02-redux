import { fetchAllDataSucess } from '../actions/usersActions'
import firebase from '../firebase'

function getAllDAta(){

    return dispatch => {

            // fetch('https://jsonplaceholder.typicode.com/users')
            //     .then(response => response.json())
            //     .then(data => {
            //         dispatch(fetchAllDataSucess(data))
            //     })

        firebase.firestore().collection('users').get()
            .then(test => {
                const users = [];
                test.forEach((param) => {
                    users.push(param.data());
                });
                dispatch(fetchAllDataSucess(users))
            })
    }
}

export default getAllDAta
