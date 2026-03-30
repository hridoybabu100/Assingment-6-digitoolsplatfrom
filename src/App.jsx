

import "./App.css";
import GetStep from "./components/getStep/GetStep";
import Banner from "./components/hero/banner/Banner";
import Updated from "./components/hero/Banner/Updated";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/pricing/Footer";
import Pricing from "./components/pricing/Pricing";
import Ready from "./components/pricing/Ready";

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <Updated/>
      <GetStep/>
      <Pricing/>
      <Ready/>
      <Footer/>
    </>
  );
}

export default App;
