import { initializeApp } from "firebase/app";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn1NpLV6g9i5qp_u6wokXH08a74r6l20E",
  authDomain: "netflix-2-0-e5346.firebaseapp.com",
  projectId: "netflix-2-0-e5346",
  storageBucket: "netflix-2-0-e5346.appspot.com",
  messagingSenderId: "238560808042",
  appId: "1:238560808042:web:979705aa95512c03ccce13",
  measurementId: "G-L6RNXR9SPM",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
};

export const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
};

export const checkAuthStatus = (setIsLoggedIn) => {
  return onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(!!user);
  });
};
