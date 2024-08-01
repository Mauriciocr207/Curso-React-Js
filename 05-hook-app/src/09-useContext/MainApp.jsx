import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import UserProvider from "./provider/UserProvider";

export default function MainApp() {
  return (
    <>
      <UserProvider>
        <header className="mb-6 bg-white flex items-center justify-between rounded-lg shadow-lg px-4">
          <h1 className="font-bold text-md text-gray-800">Main App</h1>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
      </UserProvider>
    </>
  );
}
