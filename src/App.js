import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Signup from './Pages/Signup';
import Login from './Pages/Login';


function App() {
  return (
   <>
   <BrowserRouter>
       <Navbar/>
     <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/mens' element={<ShopCategory banner = {men_banner} category = "men"/>}/>
       <Route path='/womens' element={<ShopCategory banner = {women_banner} category = "women"/>}/>
       <Route path='/kids' element={<ShopCategory banner = {kid_banner} category = "kid"/>}/>

   
       <Route path='/product' element={<Product/>}/>
       <Route path='/product/:productId' element={<Product />} />

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>



     </Routes>
     <Footer/>
   </BrowserRouter>
   </>
  );
} 

export default App;
