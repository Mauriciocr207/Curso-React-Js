import { collection, deleteDoc, getDocs } from "firebase/firestore";
import {
  addNewEmptyNote,
  savingNote,
} from "../../../../app/features/journal/journalSlice";
import { startNewNote } from "../../../../app/features/journal/journalThunk";
import { firebaseDB } from "../../../../app/firebase/config";

describe("test on journalThunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote must create and save a new note on firebase", async () => {
    const uid = "test-uid";
    getState.mockReturnValue({ auth: { uid } });

    const thunk = startNewNote();
    await thunk(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({ 
        title: expect.any(String),
        body: expect.any(String),
        date: expect.any(Number),
        id: expect.any(String),
        imageUrls: [],
    }));

    const collectionRef = collection(firebaseDB, `journalUsers/${uid}/notes`);
    const { docs } = await getDocs(collectionRef);
    
    const deletePromises = docs.map( doc => (async () => await deleteDoc(doc.ref) )() );

    await Promise.all(deletePromises);
  });
});
