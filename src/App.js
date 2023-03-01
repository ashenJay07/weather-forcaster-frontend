import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import HomeComponent from './components/homeComponent';
import SignUp from './components/signup';

function App() {
  const navigate = useNavigate();
  const [registeredUsers, setRegisteredUsers] = useState((registeredUsers) => {
    if (!registeredUsers) return [];
    return registeredUsers;
  });

  const updateRegisteredUsers = (newUser) => {
    const tempUserArray = [...registeredUsers];
    tempUserArray.push(newUser);
    setRegisteredUsers(tempUserArray);
  };

  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route
          path="/login"
          element={
            <LoginForm registeredUsers={registeredUsers} navigate={navigate} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              updateRegisteredUsers={updateRegisteredUsers}
              registeredUsers={registeredUsers}
            />
          }
        />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
