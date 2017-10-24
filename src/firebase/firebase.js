import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCUX2KCccfLO59Avos0zclu61WdQDBcYnc",
    authDomain: "f-ista.firebaseapp.com",
    databaseURL: "https://f-ista.firebaseio.com",
    projectId: "f-ista",
    storageBucket: "f-ista.appspot.com",
    messagingSenderId: "1097130637977"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export var storageRef = firebase.storage().ref();
export default firebase;
