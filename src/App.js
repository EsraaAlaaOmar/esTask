import './App.scss'

import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Products';
import AddProduct from './components/addProduct'

import {Container,Row,Col} from 'react-bootstrap'
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'

function App() {
  
  return (
   <div>
 <Router>
    <Header /> 
   
       <Routes>
                <Route path="/" element={<Products />} exact />
                <Route path="/add" element={<AddProduct />} />
               
            </Routes>
     </Router>       
    
  </div>
  );
}

export default App;
