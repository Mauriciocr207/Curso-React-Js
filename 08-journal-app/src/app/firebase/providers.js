import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    };
  }
};

export const signWithEmail = async ({ email: userEmail, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      firebaseAuth,
      userEmail,
      password
    );

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmail = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    await updateProfile(firebaseAuth.currentUser, { displayName });

    const { photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    };
  }
};

export const logoutAnySession = async () => {
    await firebaseAuth.signOut();
};
