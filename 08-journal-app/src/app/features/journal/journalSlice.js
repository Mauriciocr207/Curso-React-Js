import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    // active: {
    //     id: "12321",
    //     title: "",
    //     body: "",
    //     date: 12321,
    //     imageUrls: [],
    // }
}

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNote: (state) => { state.isSaving = true },
    addNewEmptyNote: (state, action) => { 
      state.isSaving = false;
      state.notes.push(action.payload);
      state.activeNote = action.payload;
    },
    setActiveNote: (state, action) => { state.activeNote = action.payload },
    setNotes: (state, action) => { state.notes = action.payload },
    updateNote: (state, action) => { 
      const { id } = action.payload;
      const indexNote = state.notes.findIndex(note => note.id === id);
      state.notes[indexNote] = action.payload;
      state.activeNote = action.payload;
      state.isSaving = false;
    },
    setImagesToNote: (state, action) => {
      const { id } = state.activeNote;
      const indexNote = state.notes.findIndex(note => note.id === id);

      const note = { ...state.notes[indexNote], imageUrls: action.payload };
      
      state.notes[indexNote] = note;
      state.activeNote = note;
      state.isSaving = false;
    },
    clearJournal: () => { return initialState },
    deleteNoteById: (state, action) => { 
      const id = action.payload;
      state.notes = state.notes.filter( note => note.id !== id);
      state.activeNote = state.notes[0];
      state.isSaving = false;
     }
  }
});

export const {
    savingNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setImagesToNote,
    setSaving,
    clearJournal,
    updateNote,
    deleteNoteById,
} = journalSlice.actions

export default journalSlice.reducer