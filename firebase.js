import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLz-ZgxpYVU__Za327zOBe5e1lTH10p08",
  authDomain: "sciteach-1f1d4.firebaseapp.com",
  projectId: "sciteach-1f1d4",
  storageBucket: "sciteach-1f1d4.appspot.com",
  messagingSenderId: "479848867974",
  appId: "1:479848867974:web:eb0df995107e74fab48907"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, { 
                    experimentalForceLongPolling: true, 
                });
export function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}