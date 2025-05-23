import './App.css';
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
          <Route path = '/login' element={<Login/>}/>
          <Route path ='/signup' element={<Signup/>}/>
          <Route path ='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
