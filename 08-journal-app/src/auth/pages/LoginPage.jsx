import { Link as RouterLink } from "react-router-dom";
import Google from "@mui/icons-material/Google";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startLoginWithEmail, startLoginWithGoogle, statusTypes } from "../../app/features/auth";
import { useMemo } from "react";

const initialForm = {
  email: '',
  password: ""
}

export default function LoginPage() {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const isAuthenticating = useMemo(() => status === statusTypes.checking, [ status ]);

  const {
    email, password, onInputChange
  } = useForm(initialForm)

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    dispatch( startLoginWithEmail({ email, password }) );
  }

  const onGoogleSignIn = () => {
    dispatch( startLoginWithGoogle() );
  }

  return (
    <AuthLayout title="Login">
      <Typography
        variant="label"
        sx={{ mb: 3, color: "gray", fontSize: ".9rem", display: "block" }}
      >
        Inicia sesión en el siguiente formulario
      </Typography>
      <form onSubmit={onSubmit} aria-label="form">
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              inputProps={{
                "data-testid":"email"
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              inputProps={{
                "data-testid":"password"
              }}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {errorMessage && (
              <Grid item sx={{width: "100%"}}>
                <Alert severity="error">{ errorMessage }</Alert>
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth aria-label="google-btn">
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Link
            component={RouterLink}
            width="100%"
            textAlign="center"
            color="inherit"
            to="/auth/register"
          >
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
}
