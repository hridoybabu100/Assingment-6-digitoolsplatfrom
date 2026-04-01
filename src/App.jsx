import { Suspense, useState } from "react";
import "./App.css";
import GetStep from "./components/getStep/GetStep";
import Banner from "./components/hero/Banner/Banner";
import Updated from "./components/hero/Banner/Updated";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/pricing/Footer";
import Pricing from "./components/pricing/Pricing";
import Ready from "./components/pricing/Ready";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";
import { ToastContainer } from "react-toastify";

//APi call

const getProducts = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

const productsPromise = getProducts();
console.log(productsPromise);

function App() {
  const [activetab, setActiveTab] = useState("Products");
  const [cart, setcart] = useState([]);
  // console.log(cart);
  
  // console.log(activetab);
  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Updated />

      <div className="tabs tabs-box bg-transparent justify-center mt-10 py-7">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activetab === "Products" ? 'text-white font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA]':''}`}
          defaultChecked
          aria-label="Products"
          onClick={() => setActiveTab("Products")}
          />
        <input
          type="radio"
          name="my_tabs_1"
           className={`tab rounded-full w-40 ${activetab === "Cart" ? 'text-white font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA]':''}`}
          aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl w-20"></span>}
      >
        {activetab === "Products" ? (
          <Products productsPromise={productsPromise} cart={cart} setcart={setcart} />
        ) : null}
      </Suspense>
      {activetab === "Cart" ? <Cart cart={cart} setcart={setcart}/> : null}
      <GetStep />
      <Pricing />
      <Ready />
      <Footer />

      <ToastContainer/>
    </>
  );
}

export default App;
