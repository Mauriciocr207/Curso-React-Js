import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startDeleteNote, startUpdateNote, startUploadFiles } from "../../app/features/journal";
import { useContext, useEffect, useRef, useState } from "react";
import NotyfContext from "../../context/NotyfContext";

const getInitialForm = (title, body) => ({
  inputTitle: title,
  inputBody: body,
});

export default function NoteView({ id, date, title, body, imageUrls = [] }) {
  const { inputTitle, inputBody, onInputChange, setFormState } = useForm(
    getInitialForm(title, body)
  );
  const dispatch = useDispatch();
  const notyf = useContext(NotyfContext);
  const { isSaving } = useSelector((state) => state.journal);
  const fileInputRef = useRef(null);
  const [uplodaedFiles, setUploadedFiles] = useState(false);

  useEffect(() => {
    setFormState(getInitialForm(title, body));
  }, [id]);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setUploadedFiles(true);
    } else {
      setUploadedFiles(false);
    }
  }, [imageUrls]);

  const handleSaveNote = () => {
    const activeNote = {
      id,
      date,
      title: inputTitle,
      body: inputBody,
      imageUrls,
    };

    dispatch(startUpdateNote(activeNote));

    notyf.success("Nota actualizada correctamente");
  };

  const handleFileInputChange = ({ target }) => {
    dispatch(startUploadFiles(target.files));
    setUploadedFiles(true);
  };

  const handleDelete = () => dispatch( startDeleteNote(id) );

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1, alignItems: "center" }}
    >
      <Grid item>
        <Typography fontSize={20} fontWeight="ligth">
          {new Date(date).toUTCString()}
        </Typography>
      </Grid>
      <Grid item sx={{ mb: "1rem" }}>
        <IconButton onClick={() => fileInputRef.current.click()}>
          <UploadOutlined
            color="primary"
            disabled={isSaving}
            sx={{ fontSize: "2.1rem" }}
          />
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
        </IconButton>
        <Button onClick={handleSaveNote} disabled={!uplodaedFiles || isSaving}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <Grid container maxWidth="50rem" sx={{ m: "auto" }}>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{ border: "none", mb: 1 }}
            name="inputTitle"
            value={inputTitle}
            onChange={onInputChange}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió hoy?"
            sx={{ border: "none", mb: 1 }}
            minRows={5}
            name="inputBody"
            value={inputBody}
            onChange={onInputChange}
          />
          <Grid container>
            <Button onClick={handleDelete} sx={{mt: 2}} color="error">
              <DeleteOutline />
            </Button>
          </Grid>
          <ImageGallery images={imageUrls} />
        </Grid>
      </Grid>
    </Grid>
  );
}
