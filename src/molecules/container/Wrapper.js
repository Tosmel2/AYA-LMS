import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Wrapper = ({ children }) => {
  return (
    <div className='w-full'>
      <nav className='w-full '>
        <Navbar />
      </nav>
      <div className='w-full mt-[5rem]'>
        <main className='w-full h-full'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Wrapper;
