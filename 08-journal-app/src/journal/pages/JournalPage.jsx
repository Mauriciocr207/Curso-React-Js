import { IconButton } from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../app/features/journal/journalThunk";
import { useContext } from "react";
import NotyfContext from "../../context/NotyfContext";

export default function JournalPage() {
  const dispatch = useDispatch();
  const { isSaving, activeNote } = useSelector(state => state.journal);
  const notyf = useContext(NotyfContext);
  
  const handleClickNewNote = () => {
    dispatch( startNewNote() );
    notyf.success('Nota creada correctamente');
  }

  return (
    <JournalLayout>
      {
        activeNote
          ? <NoteView {...activeNote}/>
          : <NothingSelectedView />
      }
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
        onClick={handleClickNewNote}
        disabled={isSaving}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  );
}
