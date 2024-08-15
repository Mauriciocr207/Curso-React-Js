import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";

export default function SideBar({ drawerWidth = 240 }) {
  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);

  return (
    <Box
      component="nav"
      sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          width: "100px",
          display: "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar sx={{width: drawerWidth}}>
          <Typography variant="h6" noWrap component="div">
            { displayName }
          </Typography>
        </Toolbar>
        <Divider/>
        <List>
          {notes.map(note => <NoteItem key={note.id} { ...note }  />)}
        </List>
      </Drawer>
    </Box>
  );
}
