import NavBar from './components/NavBar';   
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Header from './components/Header';  
import SearchBar from './components/SearchBar';  
import ImageDisplay from './components/ImageDisplay';  
import Footer from './components/Footer' ; 
import Card from './components/Card';  
import Home from './components/Home';
import Categories from './components/Categories';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import SellDevice from './components/SellDevice';   
import { Routes } from 'react-router-dom';
import './App.css'; 


function App() {
  return (
  
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/categories" element={<Categories phones={Categories} />} />   
          <Route path="/" element={<ImageDisplay phones={Categories} />} /> 
          <Route path="/signup" element={<SignUp phones={Categories} />} /> 
          <Route path="/cart" element={<Cart phones={Categories} />} /> 
          <Route path="/selldevice" element={<SellDevice phones={Categories} />} />
        </Routes>  
        <SearchBar />
        <Card />
        <Footer />  

      </div>
        

        
  


  );
}  

export default App;