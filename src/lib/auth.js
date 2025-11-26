"use client";

// import { auth } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";


export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};


export const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};


export const logout = () => {
    return signOut(auth);
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // user info
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};


export const listenAuthState = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      callback({
        name: user.displayName || user.email,
        email: user.email,
        photoURL: user.photoURL,
      });
    } else {
      callback(null);
    }
  });

 
  return unsubscribe;
};