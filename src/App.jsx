
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar.js';
import '../src/index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CartButton from './Components/Cartbutton.js';

import React, {useState} from 'react';
import Variantz from './Components/Variantz.js';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import DeliveryPolicy from './pages/DeliveryPolicy.js';
import ContactUs from './pages/ContactUs.js';


  function App() {
    
    const [cartItemCount, setCartItemCount] = useState(0);

    const handleCartButtonClick = () => {
    // Handle cart button click (e.g., open a modal, navigate to the cart page)
    console.log('Cart button clicked!');
  };
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
     
    <div class="Centerr">
    
  <Navbar/>
   
   
    <Carousel responsive={responsive}>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1578439231583-9eca0a363860?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwcm9zZXN8ZW58MHx8MHx8fDA%3D" alt="red flowers" class="roses" />
  <h2>Red Roses</h2>
  <p class="price">$20.99</p>
  <p> Beautiful Roses</p>
  <p><button> Add to Cart </button></p>
  </div>
  <div class="card">
  <img src="https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1684223947/vendor/9072/catalog/product/2/0/20230516125531_file_6462d48329cb9_6462d55778a09.jpeg" alt="Bouquet" className="cbouquet"/>
  <h2>Colorful Bouquets</h2>
  <p>$40.99</p>
  <p>Colorful Bouquets</p>
  <p> <button>Add to Cart</button></p>
  </div>
  <div class="card">
  <img src="https://februarybloom.com/cdn/shop/files/FlowerDeliveryMalaysia_12_cde6f9e1-da16-4b92-b55d-417af8ef5221_250x.png?v=1698511446" alt="graduation" class="graduation" />
  <h2>Events</h2>
  <p>Price Varies</p>
  <p>Request an Event</p>
  <p></p>
  </div>
  <div class="card">
  <img src="https://image.floranext.com/instances/farmerandflorist_com/catalog/product/4/8/4868a332-cb20-4790-80db-b33a55670440_64c3ac9f2cd12.jpg.webp?h=700&w=700&r=255&g=255&b=255" alt="gift" class="gift" />
  <h2>Gifts</h2>
  <p>Price Varies</p>
  <p>Request an Event</p>
  <p></p>
  </div>
</Carousel>
   <div > 
    <div >
  
  
</div>
   
 </div>
</div>
  );
};

export default App;
