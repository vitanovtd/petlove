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
import Footer from './components/Footer';


function App() {

  const { currentUser } = useContext(AuthContext);


  const PrivateRoute = ({ children }) => {
    console.log(children);
    return currentUser ? (children) : <Navigate to="/login" />
  }

  const PublicRoute = ({ children }) => {
    console.log(children);
    return !currentUser ? (children) : <Navigate to="/" />
  }





  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<PublicRoute> <Login /> </PublicRoute>} />

        <Route path='/register' element={<PublicRoute> <Register /></PublicRoute>} />



        <Route path='/pets/add' element={<PrivateRoute><AddNewPet /></PrivateRoute>} />

        <Route path='/pets' element={<AvailablePets></AvailablePets>} />
        <Route path='/pets/:petId' element={<PetDetails />} />

        <Route path='/pets/:petId/edit' element={<PrivateRoute><EditPet /></PrivateRoute>} />

        <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />

        <Route path="/*" element={<Navigate to="/" replace={true} />} />








      </Routes>
      <Footer />
    </div>
  );
}

export default App;
