import { ChildProcess } from 'child_process';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

const login = () => {
  const [authKey, setAuthKey] = useState('');
  const [windowOrigin, setWindowOrigin] = useState('');

  useEffect(() => {
    if (!authKey) {
      const random = v4();
      setAuthKey(random);
    }
    setWindowOrigin(window.location.origin);
  }, []);

  console.log(windowOrigin);

  // const redirect = 'http://localhost:3000';
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const resType = 'code';
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${windowOrigin}&response_type=${resType}&state=${authKey}`;

  return (
    <>
      <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]'>
        <div className='flex flex-col gap-20 sm:gap-10'>
          <div className='text-center'>
            <h1 className='text-3xl'>Clean Spot</h1>
            <p className='text-xl'>
              Create family-friendly versions of your favorite explicit Spotify
              playlists with ease.
            </p>
          </div>
          <div className='text-center motion-safe:animate-bounce'>
            <button className='p-2 border-solid border-2 border-black text-lg shadow-[2px_2px_2px_1px_rgb(0,0,0,1)] active:scale-90 transition-all ease-in-out duration-300'>
              <a href={authUrl}>Login with Spotify</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
