import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import Subscribe from './components/Subscribe'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import AOS from 'aos' // Import AOS for animations
import 'aos/dist/aos.css' // Import AOS styles
import Popup from './components/Popup'


function App() {
  const [OrderPopUp, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!OrderPopUp);
  };

  React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });
  AOS.refresh();
  }, []); //we will need to call this function to initialize AOS animations 
  // and it will be needed for next projects as well


  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero />
      <Products />
      <TopProducts />
      <Banner/>
      <Subscribe />
      <Testimonial/>
      <Footer/>
      <Popup OrderPopUp={OrderPopUp} setOrderPopup={setOrderPopup} />
      {/* The Popup component is used to show the order confirmation popup */}
    </div>
  )
}

export default App
