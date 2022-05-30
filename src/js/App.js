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

function App() {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop/cart' element={<Cart/>}/>
            <Route path='/indisponible/' element={<Cart/>}/>
            <Route path='/laptops/' element={<Laptops/>}>
              <Route path='/laptops/:id' element={<Laptops/>}/>
            </Route>
            <Route path='/smartphones/' element={<SmartPhones/>}>
              <Route path='/smartphones/:id' element={<SmartPhones/>}/>
            </Route>
            <Route path='/smartwatches/' element={<SmartWatches/>}/>
            <Route path='/displays/' element={<Displays/>}/>
        </Routes>

        {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
