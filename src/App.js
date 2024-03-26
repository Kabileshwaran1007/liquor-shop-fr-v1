// import logo from './logo.svg';
import './App.css';
import { Login } from './Login/Login';

import { Signup } from './Login/Signup';
import { Home } from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Product } from './Components/Addfiles/Product'
import { Admin } from './admin/Admin';
import { Beer } from './Products/Beer';
import { Wine } from './Products/Wine';
import { Spirits } from './Products/Spirits';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/admin' element={<Admin />}/>
          <Route path='/beer' element={<Beer />} />
          <Route path='/wine' element={<Wine />} />
          <Route path='/spirits' element={<Spirits />} />
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}

    </div>
  );
}

export default App;
