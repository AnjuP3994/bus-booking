import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home'
import Login from './Pages/Login/Login'
import Dashboard from './Admin/Dashboard/Dashboard'
import AdminLogin from './Admin/Login/AdminLogin'
import Landing from './Pages/landing/Landing';
import BOLogin from './BusOperator/Login/BOLogin';
import BOHome from './BusOperator/HomePage/BOHome'
import List from './Pages/List/List';
import Profile from './Admin/Profile/Profile';
import ManageUser from './Admin/ManageUser/ManageUser';
import ManageBus from './Admin/ManageBus/ManageBus';
import Busadd from './BusOperator/bus add/Busadd';
import Busprofile from './BusOperator/profile/Busprofile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />

        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/profile' element={<Profile/>} />
        <Route path='/manageuser' element={<ManageUser/>} />
        <Route path='/managebus' element={<ManageBus/>} />
       


        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Login register/>} />
        <Route path='/buslist' element={<List/>} />

        <Route path='/bologin' element={<BOLogin/>} />
        <Route path='/boregister' element={<BOLogin registerpage/>} />
        <Route path='/bohomepage' element={<BOHome/>} />
        <Route path='/addbus' element={<Busadd/>} />
        <Route path='/bus/profile' element={<Busprofile/>} />

        

      </Routes>
    </div>
  );
}

export default App;
