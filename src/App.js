import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';



import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<Login />} />


      </Routes>

    </div>
  );
}

export default App;
