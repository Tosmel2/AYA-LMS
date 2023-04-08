import React, { useEffect, useState } from "react";
import { Person } from "@mui/icons-material";
import Navbar from "../../molecules/Navbar";
import { Link } from "react-router-dom";
import User from "../../assets/user2.png";
import EditProfileForm from "./EditProfileForm";
import ProfileForm from "./ProfileForm";
import axios from "axios";



const Profile = () => {

  const [editProfile, setEditProfile] = useState(false);
 
  const handleImage = (e) => {
    const file = e.target.files[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set EditProfile State to false inside of the .then() method when you start consuming the endpoints
    setEditProfile(false); // Set EditProfile State to false
  };
  return (
    <div className='relative '>
      <Navbar />
      <div className='w-full flex h-full'>
        <aside className='flex flex-col bg-[#E2F3FF] fixed top-16 left-0 h-[100%] w-[15rem] py-20 items-center space-y-3'>
          <span className='bg-blue-500 rounded-full p-3 w-fit'>
            <Person className='text-white' sx={{ fontSize: "5rem" }} />
          </span>
          <h4 className='font-medium text-lg'>John Doe</h4>

          <div className='flex flex-col justify-center w-full items-center'>
            <span className='font-bold uppercase text-xs'>WALLET ADDRESS</span>
            <span className='font-normal text-[.8rem] tracking-normal text-center'>
              0xCe97XXXXXXXXXXXXX XXXXXXXXXXXXX99841d
            </span>
          </div>

          <div className='space-y-3 flex flex-col items-center'>
            <span className='font-bold text-sm uppercase'>BALANCE</span>

            <span className='font-bold text-4xl !mt-2'>
              0.062 <span className='text-xl'>ETH</span>
            </span>

            <Link className='capitalize underline text-[#003F6C] text-sm underline-offset-2 !mt-0'>
              Top up wallet
            </Link>
          </div>

          {!editProfile && (
            <button
              className='rounded-md bg-white text-blue-500 !mt-6 capitalize py-3 px-12 w-fit'
              onClick={() => setEditProfile(true)}
            >
              Edit Profile
            </button>
          )}
        </aside>

        {editProfile ? (
          <EditProfileForm
            handleImage={handleImage}
            User={User}
            handleSubmit={handleSubmit}
          />
        ) : (
          <ProfileForm handleImage={handleImage} User={User} />
        )}
      </div>
    </div>
  );
};

export default Profile;
