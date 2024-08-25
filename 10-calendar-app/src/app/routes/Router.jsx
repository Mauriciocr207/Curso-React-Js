import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../../UI/pages/auth";
import { CalendarPage } from "../../UI/pages/calendar";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthToken } from "../features/auth";
import { useEffect } from "react";

export default function Router() {

  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthToken()); 
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {
          isAuthenticated
            ? (
              <>
                <Route path="/*" element={<Navigate to="/calendar" />} />
                <Route path="/calendar" element={<CalendarPage />} />
              </>
            )
            : (
              <>
                <Route path="/auth/login" element={<LoginPage/>} />
                <Route path="/auth/register" element={<RegisterPage/>} />
                <Route path="/*" element={<Navigate to="/auth/login" />} />
              </>
            )
        }
      </Routes>
    </BrowserRouter>
  )
}