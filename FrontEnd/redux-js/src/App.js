import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import LoginPage from './pages/login';
import CreateUserPage from './pages/createUser';
import UserList from './pages/userList';


function App() {
  return (
    <Router>
      <Link to="/createUser">CreateUserPage</Link>
      <Link to="/login">LoginPage</Link>
      <Link to="/userList">UserList</Link>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createUser" element={<CreateUserPage />} />
        <Route path="/userList" element={<UserList/>} />
      </Routes>
    </Router>
  );
}

export default App;
