import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAf-TWUXi9Db0FQUilaaR1YmPtjIaL7of4',
  authDomain: 'cooking-site-216fb.firebaseapp.com',
  projectId: 'cooking-site-216fb',
  storageBucket: 'cooking-site-216fb.appspot.com',
  messagingSenderId: '719133065784',
  appId: '1:719133065784:web:4851e1f5edb080ae135ccd',
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();

export { projectFirestore };
