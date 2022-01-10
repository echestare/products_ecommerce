// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {HeaderApp} from './components/HeaderApp.js';
import {ListProducts} from './components/Products/ListProducts.js';
import { AlertProduct } from './components/Products/AlertProduct';


const  App = () => {
  return (
    <>
      <HeaderApp />
      <Container>
        <div className="App">
          <AlertProduct />
          <ListProducts/>
        </div>
      </Container>
    </>
    );
}

export default App;
