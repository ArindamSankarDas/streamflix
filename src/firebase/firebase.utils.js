import { initializeApp } from "firebase/app";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

initializeApp(firebaseConfig);

export const auth = getAuth();

export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const logUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
