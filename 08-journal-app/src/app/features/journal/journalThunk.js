import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNote,
  setImagesToNote,
  setNotes,
  updateNote,
} from "./journalSlice";
import uploadFile from "../../cloudinary/uploadFile";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(savingNote());

      const { uid } = getState().auth;

      const newNote = {
        title: "nota de prueba",
        body: "blablabla",
        date: new Date().getTime(),
        imageUrls: [],
      };

      const document = doc(collection(firebaseDB, `journalUsers/${uid}/notes`));
      await setDoc(document, newNote);
      newNote.id = document.id;

      dispatch(addNewEmptyNote(newNote));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;

      const collectionRef = collection(firebaseDB, `journalUsers/${uid}/notes`);
      const { docs } = await getDocs(collectionRef);

      const documents = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      dispatch(setNotes(documents));
    } catch (error) {
      dispatch(setNotes([]));
    }
  };
};

export const startUpdateNote = (noteToUpdate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(savingNote());

      const { uid } = getState().auth;

      const { id, ...note } = noteToUpdate;

      const document = doc(firebaseDB, `journalUsers/${uid}/notes/${id}`);
      await setDoc(document, note, { merge: true });

      dispatch(updateNote(noteToUpdate));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startUploadFiles = (files = []) => {
  return async (dispatch) => {
    try {
      dispatch(savingNote());

      const cloudUrl = "https://api.cloudinary.com/v1_1/dc1ieatgh/upload";

      const fileUploadPromises = Array.from(files).map(file => uploadFile(file, cloudUrl));

      const images = await Promise.all(fileUploadPromises);

      dispatch( setImagesToNote(images) );
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };
};

export const startDeleteNote = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    
    const docRef = doc(firebaseDB, `journalUsers/${uid}/notes/${id}`);

    await deleteDoc(docRef);

    dispatch( deleteNoteById(id) );
  }
}
