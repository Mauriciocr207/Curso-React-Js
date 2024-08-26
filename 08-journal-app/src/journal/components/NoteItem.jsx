import { TurnedInNot } from "@mui/icons-material";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../app/features/journal";

const truncateText = (text) => {
  return text.length > 17 ? text.substring(0, 20) + "..." : text;
}

export default function NoteItem( note ) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch( setActiveNote(note) );

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <List>
            <ListItemText primary={truncateText(note.title)} />
            <ListItemText secondary={ truncateText(note.body) } />
          </List>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
}
