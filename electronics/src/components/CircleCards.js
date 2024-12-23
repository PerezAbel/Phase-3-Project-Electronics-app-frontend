// /* Cirlcle Cards Component */
// import React from 'react';   
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import '../css/Circle.css';


// function CircleCardContainer() {  
//   const navigate = useNavigate(); // Initialize navigate
//   return (   
//     <>  
//     <h1>Shop by Category</h1>
    
//     <div className="card-container">
//       <div className="circle-card">
//         <img src="https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg" alt="Image 1" />
//       </div>

//       <div    
//           className="circle-card" 
//           onClick={() => navigate('/mobile')} // Navigate to Mobile component when clicked
//           style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer on hover
//         >
//           <img src="https://gadgetclick.ru/wa-data/public/shop/products/16/40/4016/images/23358/23358.970.jpg" alt="Image 2" />
//         </div>
         
//       <div className="circle-card">
//         <img src="https://productimages.hepsiburada.net/s/72/375-375/110000013440154.jpg" alt="Image 3" />
//       </div>  

//       <Link to="/searchrestaurants">
//       <div className="circle-card">
//         <img src="https://i.ebayimg.com/images/g/RUYAAOSwEsNlaQsG/s-l1200.jpg" alt="Image 3" />   
//       </Link>
//       </div>    
       
//       <div className="circle-card">
//         <img src="https://i5.walmartimages.com/asr/ebd4b60b-5ddf-451d-a70d-81a45c8c7fb0.b2179e295dabf080dc9191651e0164dc.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF" alt="Image 3" />
//       </div>  

//       <div className="circle-card">
//         <img src="https://btech.com/media/catalog/product/cache/071d5ccae038fcedc91e567360d549bc/5/4/5499df2a674461ee007bf144e7753f232280d1885faab4f0dfdaf48e7f5f382e.jpeg" alt="Image 3" />
//       </div>  

//       <div className="circle-card">
//         <img src="https://as-images.apple.com/is/MTJV3_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1694014868810" alt="Image 3" />
//       </div>  

//       <div className="circle-card">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-ujg71CXS34dRK7sp7TB_SRpnRjFEALLCbLvLX9Ep9hRRXjGuAbETQwJ2OH9U1XUXW0&usqp=CAU" alt="Image 3" />
//       </div>  

//       <div className="circle-card">
//         <img src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648618_392670_01_front_comping.jpg" alt="Image 3" />
//       </div>  

//       <div className="circle-card">
//         <img src="https://t4.ftcdn.net/jpg/01/17/70/79/360_F_117707909_gGN0YgkgRcTG7ZJggAytS8AJhvoZJYsq.jpg" alt="Image 3" />
//       </div>  
      
    

//       {/* Add more circle cards with images as needed */}
//     </div>  

//     </>
//   );
// }

// export default CircleCardContainer;


import React from 'react';   
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import '../css/Circle.css';

function CircleCardContainer() {  
  const navigate = useNavigate(); // Initialize navigate

  return (   
    <>  
      <h1>Shop by Category</h1>
      
      <div className="card-container">  


        {/* Example: Mobile */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/audio')} // Navigate to Mobile component
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg" alt="Audio" />
        </div>  

      
        <div 
          className="circle-card" 
          onClick={() => navigate('/mobile')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://gadgetclick.ru/wa-data/public/shop/products/16/40/4016/images/23358/23358.970.jpg" alt="Mobile" />
        </div>  



        {/* Example: Fashion */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/dronescameras')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://productimages.hepsiburada.net/s/72/375-375/110000013440154.jpg" alt="Drones" />
        </div>  




        {/* Example: Restaurants */}
        <Link to="/tablets" className="circle-card">
          <img src="https://i.ebayimg.com/images/g/RUYAAOSwEsNlaQsG/s-l1200.jpg" alt="Tablets" />
        </Link>   















        {/* Example: Groceries */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/audio')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://i5.walmartimages.com/asr/ebd4b60b-5ddf-451d-a70d-81a45c8c7fb0.b2179e295dabf080dc9191651e0164dc.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF" alt="Audio" />
        </div>

        {/* Example: Home Appliances */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/tvhome')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://btech.com/media/catalog/product/cache/071d5ccae038fcedc91e567360d549bc/5/4/5499df2a674461ee007bf144e7753f232280d1885faab4f0dfdaf48e7f5f382e.jpeg" alt="Home Appliances" />
        </div>

        {/* Example: Gadgets */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/audio')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://as-images.apple.com/is/MTJV3_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1694014868810" alt="Wear" />
        </div>

        {/* Example: Accessories */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/wearabletech')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-ujg71CXS34dRK7sp7TB_SRpnRjFEALLCbLvLX9Ep9hRRXjGuAbETQwJ2OH9U1XUXW0&usqp=CAU" alt="Accessories" />
        </div>

        {/* Example: Sports */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/computerslaptops')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648618_392670_01_front_comping.jpg" alt="Audio" />
        </div>

        {/* Example: Books */}
        <div 
          className="circle-card" 
          onClick={() => navigate('/home')} 
          style={{ cursor: 'pointer' }} 
        >
          <img src="https://t4.ftcdn.net/jpg/01/17/70/79/360_F_117707909_gGN0YgkgRcTG7ZJggAytS8AJhvoZJYsq.jpg" alt="Home" />
        </div>
      </div>  
    </>
  );
}

export default CircleCardContainer;
