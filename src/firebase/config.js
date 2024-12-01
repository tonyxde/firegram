import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzKZT81iiM3dOwKhVALJxqHZCq-6dCmdU",
    authDomain: "ninja-firegram-d1b23.firebaseapp.com",
    projectId: "ninja-firegram-d1b23",
    storageBucket: "ninja-firegram-d1b23.appspot.com",
    messagingSenderId: "492973539413",
    appId: "1:492973539413:web:cf3280529e0be91c7e94dc"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();

 export { projectStorage, projectFirestore };