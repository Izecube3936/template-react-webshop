
import './App.css';
import Header from './components/Header';
import Product from './pages/Product';
import Products from './pages/Products';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      
      <Routes>
          <Route path="/sportstuff.php" element={<Products />} />
          <Route path="/sportstuff.php/:id" element={<Product />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}



export default App;