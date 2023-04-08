import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EditProfileForm = ({ handleImage, User, handleSubmit }) => {
  // const [profileEdit, setProfileEdit] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [about, setAbout] = useState('')
  const [interests, setInterests] = useState('')
  const [profession, setProfession] = useState('')

  const id = localStorage.getItem('userid')
  console.log(id)
  const url = `https://ayaweb3-be.onrender.com/api/v1/user/profile/${id}`
  console.log(url)
  // const formData = new FormData()
  // formData.append('image', image)
  const values = {
    firstname,
    lastname,
    email,
    about,
    interests,
    profession
  }


  console.log(values, 'values')
 
 
  const handleSubmitEdit = (e)=>{
    e.prevent.default()
    axios.put(url, values)
    .then((res) => console.log(res))
    .catch((e) => console.log(e))
}
    

  return (
    <main className="w-full ml-[15rem] p-16 grid grid-cols-6 mt-[5rem] mb-14">
      <div className="col-span-4 w-full space-y-5">
        <header className="space-y-2">
          <h2 className="text-[#197DDA] capitalize text-4xl font-semibold">
            Public Profile
          </h2>
          <p>Information about yourself</p>
        </header>

        <form className="space-y-4" onSubmit={handleSubmitEdit}>
          <div className="w-full space-y-1">
            <label htmlFor="fullName" className="text-medium capitalize">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              id="firstname"
              className="profile-input"
              placeholder="John Doe"
            />
          </div>

          <div className="w-full space-y-1">
            <label htmlFor="lastname" className="text-medium capitalize">
             Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="profile-input"
              placeholder="Enter lastname Here"
            />
          </div>

          <div className="w-full space-y-1">
            <label htmlFor="email" className="text-medium capitalize">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="profile-input"
              placeholder="johndoe@example.com"
            />
          </div>

          <div className="w-full space-y-1">
            <label htmlFor="about" className="text-medium capitalize">
              About You
            </label>
            <textarea
              type="text"
              name="about"
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="profile-input resize-none h-[13rem]"
              placeholder="Enter Description Here"
            />
          </div>

          <div className="w-full space-y-1">
            <label htmlFor="profession" className="text-medium capitalize">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              id="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="profile-input"
              placeholder="Enter Profession Here"
            />
          </div>

          <div className="w-full space-y-1">
            <label htmlFor="interests" className="text-medium capitalize">
              interests
            </label>
            <input
              type="text"
              name="interests"
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="profile-input"
              cols={12}
              placeholder="Enter Interest Here"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-500 text-white capitalize py-3 px-12 w-fit"
          >
            Update Profile
          </button>
        </form>
      </div>

      <div className="w-fit h-fit col-span-2 border border-[#005EA2] rounded-md px-8 py-8 ml-auto flex flex-col items-center space-y-4">
        <img src={User} alt="User" />

        <input
          type="file"
          name="profilePhoto"
          id="profilePhoto"
          className="hidden"
          onChange={handleImage}
        />

        <label
          htmlFor="profilePhoto"
          className="capitalize underline text-[#003F6C] text-base underline-offset-2 cursor-pointer"
        >
          Upload Profile Photo
        </label>
      </div>
    </main>
  )
}

export default EditProfileForm
