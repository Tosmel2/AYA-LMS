import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../molecules/Footer";
import Navbar from "../../components/Homepage/Navbar";


const CartPage = () => {
  const navigate = useNavigate();
  // const cartIsEmpty = cartItems.length === 0;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-4 items-left p-[5%] ">
        <h1 className="text-[#197dda] text-5xl font-bold">Cart</h1>
        {/* {cartIsEmpty ? ( */}
        <div className="text-left mt-[5%] space-y-6">
          <p className="text-[12px] uppercase mb-4 border-b-2 border-[#888D93] font-sans w-full lg:w-[60%]">
            No Course in cart
          </p>
          <button
            className="bg-[#197DDA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              navigate("/displaycart");
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
      <hr className="border w-full" />
      <Footer />
    </div>
  );
};

export default CartPage;