import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../app/firebase/config";
import { login, logout, statusTypes } from "../app/features/auth";
import CheckingAuth from "../UI/CheckingAuth";
import { startLoadingNotes } from "../app/features/journal";

export default function AppRouter() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async(user) => {
      if(!user) return dispatch( logout() );
      const { displayName, email, photoURL, uid,  } = user;
      dispatch( login({ displayName, email, photoURL, uid,  }) );
      dispatch( startLoadingNotes() )
    });
  }, []);

  if (status === statusTypes.checking) {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {
        status === statusTypes.authenticated 
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} /> 
      }

      <Route  path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
