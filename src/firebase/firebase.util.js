import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCdKcVoQohrwatCpHFeaNyi5P4vc1jnlqg',
  authDomain: 'crown-clothing-58f8f.firebaseapp.com',
  databaseURL: 'https://crown-clothing-58f8f.firebaseio.com',
  projectId: 'crown-clothing-58f8f',
  storageBucket: '',
  messagingSenderId: '873913419132',
  appId: '1:873913419132:web:fb06a505a2e375905950f9',
  measurementId: 'G-60W8M0WKZG'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestroe = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
