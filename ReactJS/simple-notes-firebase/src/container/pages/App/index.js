
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register'
import {Provider } from 'react-redux';
import {store} from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        
        </div>
        </BrowserRouter>
    </Provider>
    
  );
}

export default App;
