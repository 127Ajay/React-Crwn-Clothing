import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-oZQPxWy-Wrs4mzk2bgJncPLE8MC5tx4",
    authDomain: "crwn-clothing-db-77c18.firebaseapp.com",
    projectId: "crwn-clothing-db-77c18",
    storageBucket: "crwn-clothing-db-77c18.appspot.com",
    messagingSenderId: "264005017036",
    appId: "1:264005017036:web:b264592c21fb57451ed169",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
