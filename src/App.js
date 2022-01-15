// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HeaderApp} from './components/HeaderApp.js';
import { Home } from './views/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProductView } from './views/ProductView';
import { PurchaseView } from './views/PurchaseView';



const  App = () => {
  return (
    <>
      <HeaderApp />
      {/* <Home /> */}
{/* import { Switch, Routes, Redirect } from 'react-router-dom'; // Para react-router-dom 5.0.0*/} 
      {/* <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={'/contact'} exact render={()=><div>Página de Contacto</div>} />
        <Route path='*' element={<Redirect to={'/'} />} />
      </Switch> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/product'  element={<div>Página de información del producto</div>} /> */}
        <Route path='/product/:id'  element={<ProductView/>} />
        <Route path='/purchase' element={<PurchaseView/>} />
        {/* <Route path='*' element={<div>404 Page not found</div>}/> */}
        <Route path='*' element={<Navigate to= "/"  />} />
      </Routes>
    </>
    );
}

export default App;
