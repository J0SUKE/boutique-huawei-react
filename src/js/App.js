import '../scss/App.scss';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Laptops from './pages/Products/Laptops';
import SmartPhones from './pages/Products/SmartPhones';
import SmartWatches from './pages/Products/SmartWatches'
import Displays from './pages/Products/Displays';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop/cart' element={<Cart/>}/>
            <Route path='/indisponible/' element={<Cart/>}/>
            
            <Route path='/laptops/' element={<Laptops/>}/>
            <Route path='/laptops/:id' element={<Product/>}/>
            
            <Route path='/smartphones/' element={<SmartPhones/>}/>
            <Route path='/smartphones/:id' element={<Product/>}/>
            
            <Route path='/smartwatches/' element={<SmartWatches/>}/>
            <Route path='/smartwatches/:id' element={<Product/>}/>
            
            <Route path='/tablettes/' element={<Displays/>}/>
            <Route path='/tablettes/:id' element={<Product/>}/>
        </Routes>

        {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
