import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rectangle from "../../assets/rectangle.png";
import Footer from "../../molecules/Footer";
import { Icon } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Navbar from "../../components/Homepage/Navbar";

const data = [
  {
    image: Rectangle,
    title: "Getting Started with Web3 Development",
    author: "Sebastein arbogast",
    price: "0.062",
  },
];

const DisplayCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItemPrice, setSelectedItemPrice] = useState("");
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const newItem = { name: selectedItem, price: selectedItemPrice };
    setCartItems([...cartItems, newItem]);
    setSelectedItem("");
    setSelectedItemPrice("");
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    navigate("/checkout");
    console.log("Checkout initiated with cart items: ", cartItems);

    // Clear the cart after checkout
    setCartItems([]);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full p-[5%] ">
        <h1 className="text-[#197dda] text-5xl font-bold">Cart</h1>

        <div className="w-full lg:flex gap-[20%] py-8">
          <div className="w-full lg:w-[60%]">
            {data.map((item, index) => (
              <div
                key={index}
                className=" py-4 mb-4  flex flex-col  gap-[2rem]"
              >
                <p className="text-[12px] uppercase mb-4 border-b-2 border-[#888D93] w-full font-sans">
                  {data.length} course in cart
                </p>{" "}
                <div className="flex flex-col lg:flex-row w-full  gap-[10%]">
                  <img src={item.image} alt={item.title} className="mr-4" />
                  <div>
                    <p className="text-xl font-bold ">{item.title}</p>
                    <p className="text-sm text-[#41474D] font-serif">
                      {item.author}
                    </p>
                    <p className="text-md text-[#197DDA] text-xl">
                      <Icon as={AiFillStar} />
                      <Icon as={AiFillStar} />
                      <Icon as={AiFillStar} />
                      <Icon as={AiFillStar} />
                      <Icon as={AiOutlineStar} />
                    </p>
                  </div>
                  <div className="flex lg:flex-col justify-between ">
                    <p className="text-md text-[#197DDA] text-xl font-bold">
                      {item.price}{" "}
                      <small className="text-sm text-[#197DDA]">ETH</small>
                    </p>{" "}
                    <p
                      className="text-[#D00606] text-[10px] font-bold py-2 cursor-pointer text-right"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col space-y-4 items-center justify-between m-4 border bg-[#A6D9FF] w-full lg:w-[150px] h-[200px] p-6 rounded-lg">
              <p className="text-[10px] uppercase text-[#003F6C]">Total</p>
              <p className="text-lg font-bold text-[#003F6C]">
                {" "}
                0.062
                {/* ${" "}
                {cartItems.reduce(
                  (totalPrice, item) => totalPrice + Number(item.price),
                  0
                )} */}
              </p>
              <small>
                {" "}
                <small className="text-sm text-[#003F6C]">ETH</small>
              </small>
            </div>
            <button
              className="bg-[#197DDA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[167px]"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <hr className="border w-full" />

      <Footer />
    </div>
  );
};

export default DisplayCart;