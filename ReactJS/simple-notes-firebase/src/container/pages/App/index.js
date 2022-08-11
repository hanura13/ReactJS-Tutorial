import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register'


function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;