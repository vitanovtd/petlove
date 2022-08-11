import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


function App() {

  const { currentUser } = useContext(AuthContext);


  const requireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />


        <Route path='/login' element={<Login />} />


      </Routes>

    </div>
  );
}

export default App;
