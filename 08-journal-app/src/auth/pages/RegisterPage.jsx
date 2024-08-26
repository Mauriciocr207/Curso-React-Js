import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { registerValidations } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { startCreateUserWithEmail, statusTypes } from "../../app/features/auth";
import { useMemo } from "react";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === statusTypes.checking, [ status ]);
  const {
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    errors,
    registerSubmitForm,
  } = useForm(
    {
      displayName: "",
      email: "",
      password: "",
    },
    registerValidations
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    registerSubmitForm();

    if (!isFormValid) return;


    dispatch(
      startCreateUserWithEmail({
        displayName,
        email,
        password
      })
    );
  };

  return (
    <AuthLayout title="Crear Cuenta">
      <Typography
        variant="label"
        sx={{ mb: 3, color: "gray", fontSize: ".9rem", display: "block" }}
      >
        Registrate y comienza a administrar tus clientes
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!errors.displayName}
              helperText={errors.displayName ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!errors.email}
              helperText={errors.email ?? ""}
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
              error={!!errors.password}
              helperText={errors.password ?? ""}
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
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
          <Link
            component={RouterLink}
            to="/auth/login"
            sx={{ color: "primary.name" }}
          >
            Iniciar Sesión
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
}
