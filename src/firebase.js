import * as firebase  from 'firebase';

let config = {
    apiKey: "AIzaSyBMf4lkU9vvnqPTq8-omzWkPSyuYYsi34Y",
    authDomain: "fixterlogin.firebaseapp.com",
    databaseURL: "https://fixterlogin.firebaseio.com",
    projectId: "fixterlogin",
    storageBucket: "fixterlogin.appspot.com",
    messagingSenderId: "637898066517"
  };
  firebase.initializeApp(config);

  export default firebase;