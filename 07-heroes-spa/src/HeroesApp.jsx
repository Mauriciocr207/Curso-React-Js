import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./auth/providers/AuthProvider";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from '@material-tailwind/react'

const theme = {
  collapse: {
    styles: {
      base: {
        overflow: "none",
      }
    }
  }
}

export default function HeroesApp() {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider value={theme}>
        <AuthProvider>
          <AppRouter/>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}