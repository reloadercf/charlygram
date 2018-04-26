import * as firebase  from 'firebase';

let config = {
    apiKey: "AIzaSyBKLE0UGl7jN1ey9OZEXsyYWsQ2hvpdt2U",
    authDomain: "fixtergram-frontend.firebaseapp.com",
    databaseURL: "https://fixtergram-frontend.firebaseio.com",
    projectId: "fixtergram-frontend",
    storageBucket: "fixtergram-frontend.appspot.com",
    messagingSenderId: "415609720379"
  };
  firebase.initializeApp(config);

  export default firebase;