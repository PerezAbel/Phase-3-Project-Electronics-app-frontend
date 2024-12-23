/*App Component imports */
import './App.css';
import React, { useEffect, useState } from 'react'; 
/*import SearchBar from './components/SearchBar';*/  

import Footer from './components/Footer';

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

import ShopAll from './components/ShopAll';
import ComputersLaptops from './components/ComputersLaptops';
import Tablets from './components/Tablets';
import DronesCameras from './components/DronesCameras';
import Audio from './components/Audio';
import Mobile from './components/Mobile';
import TvHome from './components/TvHome';
import WearableTech from './components/WearableTech'





function App() {


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

     {/* <SearchBar />*/}
      <Navigation />
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/about" element={<About about={About} />} />
        <Route path="contact/" element={<Contact contact={Contact} />} />
        <Route path="/cart" element={<Cart cart={Cart} />} />
        <Route path="/signup" element={<SignUp signup={SignUp} />} />
        <Route path="/login" element={<LogIn login={LogIn} />} />
      </Routes>
     
 
      <Routes>
        <Route path="/shopall" element={<ShopAll shop={shop} />} />
        <Route path="/computersLaptops" element={<ComputersLaptops computer={computer} />} />
        <Route path="tablets/" element={<Tablets tablets={tablets} />} />
        <Route path="/dronescameras" element={<DronesCameras drones={drones} />} />
        <Route path="/audio" element={<Audio audio={audio} />} /> 
        <Route path="/mobile" element={<Mobile mobile={mobile} />} />
        <Route path="/tvhome" element={<TvHome television={television} />} />
        <Route path="/wearabletech" element={<WearableTech wear={wear} />} />    
      </Routes>  
     


    
      <Footer />   
   
      </CartProvider>
   
    </div>






  );
}

export default App;