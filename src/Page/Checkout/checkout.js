import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../molecules/Footer";
import Navbar from "../../components/Homepage/Navbar";

const countries = [
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "UK" },
];

const BillingPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [paymentMethod, setPaymentMethod] = useState("");
  const [useWallet, setUseWallet] = useState(false);
  const [useDebitCard, setUseDebitCard] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const handleUseWallet = () => {
    setUseWallet(true);
    setUseDebitCard(false);
    setPaymentMethod("wallet");
  };

  const handleUseDebitCard = () => {
    setUseDebitCard(true);
    setUseWallet(false);
    setPaymentMethod("debit card");
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log(`Checking out with payment method: ${paymentMethod}`);
    console.log(`Purchased items: ${purchasedItems}`);
    console.log(`Total amount: ${totalAmount}`);
    navigate("/checkout-success");
  };

  return (
    <div>
      <Navbar />
      <div className=" px-4 lg:pl-[6rem] lg:pr-0 flex flex-col gap-8 lg:flex-row items-center w-full lg:gap-[2%] h-full border">
        <div className="flex flex-col gap-8 w-full lg:w-[50%]">
          <div className=" space-y-4 pr-[5%]">
            <p className="text-[#197DDA] text-5xl font-bold py-8">Checkout</p>
            <h1 className="text-2xl font-bold mb-4">Billing Address</h1>
            <form className="space-y-6 w-full lg:w-[80%]">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2 capitalize"
                  htmlFor="name"
                >
                  country
                </label>
                <select
                  className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Ghana</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-2xl font-bold mb-4">Payment Method</p>
              <div className=" flex border bg-[#A6D9FF] items-center justify-between p-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="card-number"
                >
                  <p className="text-[#012F50] text-xl font-bold">
                    John's Wallet
                  </p>
                  <small className="text-[#003F6C] text-[10px]">
                    0xCe97XX...XXXXXX99841d
                  </small>
                </label>
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="option1"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
              </div>
              <div className=" flex border bg-[#A6D9FF] items-center justify-between p-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="expiry-date"
                >
                  <p className="text-[#012F50] text-xl font-bold">
                    Debit/Credit Card
                  </p>
                  <small className="text-[#003F6C] text-[10px]">
                    VISA, MASTERCARD, AMEX
                  </small>{" "}
                </label>
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="option2"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-[50%]  w-full border bg-[#197DDA] pt-[10%] pb-[15%] px-[5%] h-[100%] space-y-6">
          <div className=" mb-4 space-y-8 text-white">
            <h2 className="text-lg font-bold mb-2">Summary</h2>
            <div className="flex items-center justify-between">
              <p>Listed Price:</p>

              <p>ETH 0.062</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Fees:</p>

              <p>ETH 0.002</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p>Total:</p>

              <p>ETH 0.064</p>
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <button
              className="bg-[#FEFEFE] hover:bg-[#FEFEEE] text-[#197DDA] font-bold py-2 px-4 rounded-md text-center w-[377px]"
              //  onClick={}
            >
              Complete Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BillingPage;