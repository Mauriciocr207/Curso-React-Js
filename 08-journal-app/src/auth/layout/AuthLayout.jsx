import { Grid, Typography } from "@mui/material";

export default function AuthLayout( { children, title = "" } ) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid 
        item
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: {
            sm: 450
          }
        }}
        className="animate__animated animate__fadeIn animate__fast shadow-xl"
      >
        <Typography variant="h5" sx={{color: "primary.main"}}>{title}</Typography>
        { children }
      </Grid>      
    </Grid>
  )
}