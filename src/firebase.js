import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpNOEPQ1FS4DK3fJ_ddIkkZXfbtu2Zqfs",
    authDomain: "ecommerce-app-6f855.firebaseapp.com",
    projectId: "ecommerce-app-6f855",
    storageBucket: "ecommerce-app-6f855.appspot.com",
    messagingSenderId: "588753863223",
    appId: "1:588753863223:web:dfdeb4c4cdf6d1f36675b2",
    measurementId: "G-T7TNVG1MCX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};