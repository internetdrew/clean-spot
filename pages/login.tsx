import React from 'react';

const login = () => {
  return (
    <>
      <section className='bg-[#ede0d4] h-screen overflow-y-hidden relative'>
        <div className='text-center mt-20'>
          <h1 className='text-xl sm:text-2xl'>Clean Spot</h1>
          <p className='text-lg sm:text-xl'>
            Clean your favorite explicit Spotify playlists with ease.
          </p>
        </div>
        <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <button className='p-2 border-solid border-2 border-black text-sm sm:text-lg shadow-[2px_2px_2px_1px_rgb(0,0,0,1)] active:scale-90 transition-all ease-in-out duration-300'>
            <a href=''>Login with Spotify</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default login;
