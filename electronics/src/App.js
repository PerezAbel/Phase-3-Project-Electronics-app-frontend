import NavBar from './components/NavBar';   
import { BrowserRouter as Router, Route, Link , Switch} from 'react-router-dom'; 
import ImageSlider from './components/ImageSlider';  
import SearchBar from './components/SearchBar';  
import Navigation from './components/Navigation';
import ImageDisplay from './components/ImageDisplay';  
 /*import Footer from './components/Footer' ;*/ 
import Card from './components/Card';  
import Home from './components/Home';
import Categories from './components/Categories';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import SellDevice from './components/SellDevice';   
import { Routes } from 'react-router-dom';
import './App.css'; 
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import Logo from './components/Logo';  
import Footer from './components/Footer';   
import SpecialOffers from './components/SpecialOffers';
import ImageGrid from './components/ImageGrid'; 
import CircleCards from './components/CircleCards'
import DisplayCard from './components/DisplayCard';
import Newsletter from './components/Newsletter';   
import LogIn from "./components/LogIn" ;  
import Contact from './components/Contact' ;   
import Services from './components/Services' ; 
import About from './components/About'
function App() {   

  const images = [
    'https://i.gadgets360cdn.com/large/iphone_14_pro_gold_1683696510783.jpg',
    'https://media.licdn.com/dms/image/D5612AQGE_uzD2LP9lw/article-cover_image-shrink_720_1280/0/1676511384989?e=2147483647&v=beta&t=EB6SMknWKrMA6Gh6Fvr8def05DW4gHscERSEuqtp7rE', 
    'https://www.zdnet.com/a/img/2022/10/11/ed0ec52a-6b1b-4319-ae82-e0a81024a2f3/surfacelaptop5.jpg',
    'https://i.ytimg.com/vi/VQJEtXeJJKQ/maxresdefault.jpg',
  ];

  return (
  
      <div className="App">    
        <Logo />   
        <SearchBar/>  
        <Navigation />    
        <Routes>  
        <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
        </Routes>
         
        <ImageSlider images={images} />
        <NavBar />       
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/categories" element={<Categories phones={Categories} />} />   
          <Route path="/" element={<ImageDisplay phones={Categories} />} /> 
          <Route path="/signup" element={<SignUp phones={Categories} />} /> 
          <Route path="/cart" element={<Cart phones={Categories} />} /> 
          <Route path="/selldevice" element={<SellDevice phones={Categories} />} />
        </Routes>    
        <DisplayCard/>    
        <CircleCards/>      
        <ImageGrid/>        
        <SpecialOffers/>  
        <Newsletter />
        <Footer />
    

      </div>
        

        
  


  );
}  

export default App;