// import logo from './logo.svg';
import './App.css';
import { Login } from './Login/Login';

import { Signup } from './Login/Signup';
import { Home } from './Login/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
