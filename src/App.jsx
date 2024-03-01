import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home'
import Login from './Pages/Login/Login'
import Landing from './Pages/landing/Landing';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Login register/>} />
        <Route path='/landing' element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;
