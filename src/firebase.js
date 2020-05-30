import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD3QUzZ4B2PqZBcYbsfL5rCv8Hw9QsmUXQ",
    authDomain: "redux-90b76.firebaseapp.com",
    databaseURL: "https://redux-90b76.firebaseio.com",
    projectId: "redux-90b76",
    storageBucket: "redux-90b76.appspot.com",
    messagingSenderId: "441125174599",
    appId: "1:441125174599:web:81482e2b8bdafc1f546062"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase