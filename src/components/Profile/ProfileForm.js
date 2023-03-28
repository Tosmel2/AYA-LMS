import React from "react";

const ProfileForm = ({ handleImage, User }) => {
  return (
    <main className='w-full ml-[15rem] p-16 grid grid-cols-6 mt-[5rem] mb-14'>
      <div className='col-span-4 w-full space-y-5'>
        <header className='space-y-2'>
          <h2 className='text-[#197DDA] capitalize text-4xl font-semibold'>
            Public Profile
          </h2>
          <p>Information about yourself</p>
        </header>

        <form className='space-y-4'>
          <div className='w-full space-y-1'>
            <label htmlFor='fullName' className='text-medium capitalize'>
              Full Name
            </label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              className='profile-input'
              placeholder='John Doe'
            />
          </div>

          <div className='w-full space-y-1'>
            <label htmlFor='username' className='text-medium capitalize'>
              username
            </label>
            <input
              type='text'
              name='username'
              id='username'
              className='profile-input'
              placeholder='Enter Username Here'
            />
          </div>

          <div className='w-full space-y-1'>
            <label htmlFor='email' className='text-medium capitalize'>
              Email Address
            </label>
            <input
              type='text'
              name='email'
              id='email'
              className='profile-input'
              placeholder='johndoe@example.com'
            />
          </div>

          <div className='w-full space-y-1'>
            <label htmlFor='about' className='text-medium capitalize'>
              About You
            </label>
            <textarea
              type='text'
              name='about'
              id='about'
              className='profile-input resize-none h-[13rem]'
              placeholder='Enter Description Here'
            />
          </div>

          <div className='w-full space-y-1'>
            <label htmlFor='profession' className='text-medium capitalize'>
              Profession
            </label>
            <input
              type='text'
              name='profession'
              id='profession'
              className='profile-input'
              placeholder='Enter Profession Here'
            />
          </div>

          <div className='w-full space-y-1'>
            <label htmlFor='interests' className='text-medium capitalize'>
              interests
            </label>
            <input
              type='text'
              name='interests'
              id='interests'
              className='profile-input'
              cols={12}
              placeholder='Enter Interest Here'
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default ProfileForm;
