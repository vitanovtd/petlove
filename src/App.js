import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import Register from './components/Register';
import Logout from './components/Logout';


function App() {

  const { currentUser } = useContext(AuthContext);


  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/Logout' element={<Navigate to="/" replace={true} />} />

        <Route path="/*" element={<Navigate to="/" replace={true} />} />








      </Routes>

    </div>
  );
}

export default App;
