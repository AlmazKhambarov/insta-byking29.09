/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
// this is comment too
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
// this is comment too
import User from "./components/User/User";
import { useState } from "react";
import { auth } from "./Api/firebase";
// this is comment too

function App() {
  const [user, setUser] = useState();
  auth.onAuthStateChanged((user) => setUser(user));
  return (
    <>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Home user={user} />} />
        {/* this is comment for app */}
        <Route
          path="/sign-in"
          element={user ? <a href="/home">Back to Home Page</a> : <Register />}
        />
        {/* this is comment for app */}
        <Route path="/home" element={user ? <Home user={user} /> : null} />
        <Route
          path="/profile"
          // this is comment for app
          element={
            user ? <User user={user} /> : <a href="/">Back to Login page</a>
          }
          // this is comment for app
        />
      </Routes>
    </>
  );
}

export default App;
// this is comment for app
