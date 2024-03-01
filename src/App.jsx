import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home'
import Login from './Pages/Login/Login'
import Dashboard from './Admin/Dashboard/Dashboard'
import AdminLogin from './Admin/Login/AdminLogin'
import List from './Pages/List/List'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Login register/>} />
        <Route path='/buslist' element={<List/>} />
      </Routes>
    </div>
  );
}

export default App;
