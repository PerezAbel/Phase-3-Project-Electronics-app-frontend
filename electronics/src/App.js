/*App Component imports */
import './App.css';
import React, { useEffect, useState } from 'react';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import SpecialOffers from './components/SpecialOffers';
import ImageGrid from './components/ImageGrid';
import CircleCards from './components/CircleCards'
import DisplayCard from './components/DisplayCard';
import Newsletter from './components/Newsletter';
import ImageSlider from './components/ImageSlider';
import ImageDisplay from './components/ImageDisplay';
import Card from './components/Card';
import SellDevice from './components/SellDevice';
import { CartProvider } from './components/CartContext'  // Import the CartProvider

/*imports from the Navigation component */
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import LogIn from "./components/LogIn";
import Contact from './components/Contact';
import About from './components/About'



/*imports from the NavBar component */
import NavBar from './components/NavBar'
import ShopAll from './components/ShopAll';
import ComputersLaptops from './components/ComputersLaptops';
import Tablets from './components/Tablets';
import DronesCameras from './components/DronesCameras';
import Audio from './components/Audio';
import Mobile from './components/Mobile';
import TvHome from './components/TvHome';
import WearableTech from './components/WearableTech'



<Routes>
  <Route path="/about" component={About} />
  {/* <Route path="/services" component={Services} /> */}
  <Route path="/contact" component={Contact} />
  <Route path="/cart" component={Cart} />
  <Route path="/signup" component={SignUp} />
  <Route path="/login" component={LogIn} />
</Routes>


function App() {
  /*Image display code */
  const images = [
    'https://i.gadgets360cdn.com/large/iphone_14_pro_gold_1683696510783.jpg',
    'https://media.licdn.com/dms/image/D5612AQGE_uzD2LP9lw/article-cover_image-shrink_720_1280/0/1676511384989?e=2147483647&v=beta&t=EB6SMknWKrMA6Gh6Fvr8def05DW4gHscERSEuqtp7rE',
    'https://www.zdnet.com/a/img/2022/10/11/ed0ec52a-6b1b-4319-ae82-e0a81024a2f3/surfacelaptop5.jpg',
    'https://i.ytimg.com/vi/VQJEtXeJJKQ/maxresdefault.jpg',
  ];

  const [shop, setShop] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4000/Shop')
      .then((response) => response.json())
      .then((data) => setShop(data));
  }, []);              
  
  
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4001/Tablets')
      .then((response) => response.json())
      .then((data) => setTablets(data));
  }, []);     

  

  const [computer, setComputer] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4002/Computer')
      .then((response) => response.json())
      .then((data) => setComputer(data));
  }, []);   


  const [drones, setDrones] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4003/Drones')
      .then((response) => response.json())
      .then((data) => setDrones(data));
  }, []);     


  const [audio, setAudio] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4004/Audio')
      .then((response) => response.json())
      .then((data) => setAudio(data));
  }, []);   
 

  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4005/Mobile')
      .then((response) => response.json())
      .then((data) => setMobile(data));
  }, []);    

   
  const [television, setTelevision] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4006/Television')
      .then((response) => response.json())
      .then((data) => setTelevision(data));
  }, []);    


  const [wear, setWear] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4007/Wear')
      .then((response) => response.json())
      .then((data) => setWear(data));
  }, []); 

 {/**/}
  return (

    <div className="App">  
      <CartProvider>
      <Logo />
      <SearchBar />
      <Navigation />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" element={<About phones={About} />} />
        <Route path="contact/" element={<Contact phones={Contact} />} />
        <Route path="/cart" element={<Cart phones={Cart} />} />
        <Route path="/signup" element={<SignUp phones={SignUp} />} />
        <Route path="/login" element={<LogIn phones={LogIn} />} />
      </Routes>
      <ImageSlider images={images} />
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/shopall" element={<ShopAll shop={shop} />} />
        <Route path="/computersLaptops" element={<ComputersLaptops computer={computer} />} />
        <Route path="tablets/" element={<Tablets tablets={tablets} />} />
        <Route path="/dronescameras" element={<DronesCameras drones={drones} />} />
        <Route path="/audio" element={<Audio audio={audio} />} />
        <Route path="/mobile" element={<Mobile mobile={mobile} />} />
        <Route path="/tvhome" element={<TvHome television={television} />} />
        <Route path="/wearabletech" element={<WearableTech wear={wear} />} />   
       

      </Routes>  
      

      <DisplayCard />
      <CircleCards /> 
      
      <ImageGrid />
      <SpecialOffers />
      <Newsletter />  
      
      <Footer />    
      


      </CartProvider>

    </div>






  );
}

export default App;