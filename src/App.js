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
import EditPet from './components/Pets/EditPet';
import AvailablePets from './components/Pets/AvailablePets';
import PetDetails from './components/Pets/PetDetails';
import Profile from './components/Profile';



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
        <Route path='/register' element={<Register />} />



        <Route path='/pets/add' element={<RequireAuth><AddNewPet /></RequireAuth>} />

        <Route path='/pets' element={<AvailablePets></AvailablePets>} />
        <Route path='/pets/:petId' element={<PetDetails />} />

        <Route path='/pets/:petId/edit' element={<RequireAuth><EditPet /></RequireAuth>} />

        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />

        <Route path="/*" element={<Navigate to="/" replace={true} />} />








      </Routes>

    </div>
  );
}

export default App;
