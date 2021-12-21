// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {HeaderApp} from './components/HeaderApp.js';
import {ListProducts} from './components/ListProducts.js';


const  App = () => {
  return (
    <Container>
      <div className="App">
        <HeaderApp/>
        <ListProducts/>
      </div>
    </Container>
    );
}

export default App;
