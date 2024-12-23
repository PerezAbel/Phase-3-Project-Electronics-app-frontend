import React from 'react';     
import NavBar from './NavBar'   

import SpecialOffers from './SpecialOffers';
import ImageGrid from './ImageGrid';
import CircleCards from './CircleCards'
import DisplayCard from './DisplayCard';
import Newsletter from './Newsletter';
import ImageSlider from './ImageSlider';       


  /*Image display code */
  const images = [
    'https://i.gadgets360cdn.com/large/iphone_14_pro_gold_1683696510783.jpg',
    'https://media.licdn.com/dms/image/D5612AQGE_uzD2LP9lw/article-cover_image-shrink_720_1280/0/1676511384989?e=2147483647&v=beta&t=EB6SMknWKrMA6Gh6Fvr8def05DW4gHscERSEuqtp7rE',
    'https://www.zdnet.com/a/img/2022/10/11/ed0ec52a-6b1b-4319-ae82-e0a81024a2f3/surfacelaptop5.jpg',
    'https://i.ytimg.com/vi/VQJEtXeJJKQ/maxresdefault.jpg',
  ];
        

const Home = () => {
    return (   
        <div className="Home">      
       
         <ImageSlider images={images} />    
         <NavBar />    
         <DisplayCard />
         <CircleCards />       
         <ImageGrid />
         <SpecialOffers />
         <Newsletter />  
    
               
     
        </div>   
    );
};

export default Home;
