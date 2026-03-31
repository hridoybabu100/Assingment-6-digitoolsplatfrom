import React, { use } from "react";
import Product from "./Product";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);

  // console.log(products);

  return (
    <div>
      <div className="text-center space-y-2 py-10">
        <h1 className="text-4xl font-bold text-black">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>

        <div>
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Products
          </button>
          <button className="btn rounded-full">Cart (2)</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto">
        {products.map((product) => <Product product={product} key={product.id}></Product> )}
      </div>
    </div>
  );
};

export default Products;
