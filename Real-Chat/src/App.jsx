import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/chat";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
