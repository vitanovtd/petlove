import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

import AddNewPet from './components/Pets/AddNewPet';

import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';



function App() {

  const { currentUser } = useContext(AuthContext);


  const RequireAuth = ({ children }) => {
    console.log(children);
    return currentUser ? (children) : <Navigate to="/login" />
  }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />



        <Route path='/add' element={<RequireAuth><AddNewPet /></RequireAuth>} />

        <Route path="/*" element={<Navigate to="/" replace={true} />} />








      </Routes>

    </div>
  );
}

export default App;
