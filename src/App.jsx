import { Suspense } from "react";
import "./App.css";
import GetStep from "./components/getStep/GetStep";
import Banner from "./components/hero/Banner/Banner";
import Updated from "./components/hero/Banner/Updated";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/pricing/Footer";
import Pricing from "./components/pricing/Pricing";
import Ready from "./components/pricing/Ready";
import Products from "./components/products/Products";

//APi call

const getProducts = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

const productsPromise = getProducts();
console.log(productsPromise);

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Updated />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Products productsPromise={productsPromise}/>
      </Suspense>
      <GetStep />
      <Pricing />
      <Ready />
      <Footer />
    </>
  );
}

export default App;
