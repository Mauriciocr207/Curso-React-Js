import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../../UI/pages/auth";
import { CalendarPage } from "../../UI/pages/calendar";

const authenticated = true;

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        {
          (!authenticated)
            ? (
              <Route path="/auth">
                <Route path="login" element={<LoginPage/>} />
                <Route path="register" element={<RegisterPage/>} />
              </Route>
            )
            : <Route path="/*" element={<CalendarPage />} />
        }
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  )
}