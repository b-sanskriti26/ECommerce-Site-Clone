import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAq6oUMO0Ipj__hje2mwHRAfY2gyrDPxuI",
    authDomain: "clone-38934.firebaseapp.com",
    projectId: "clone-38934",
    storageBucket: "clone-38934.appspot.com",
    messagingSenderId: "635290459428",
    appId: "1:635290459428:web:8c492d74f886d9b7a9e7b1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
