import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { useState, useEffect } from 'react';

const login = () => {
  const [redirectUri, setRedirectUri] = useState('');
  const [spotifyStateStr, setSpotifyStateStr] = useState('');

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const responseType = 'code';
  const authEndpoint = 'https://accounts.spotify.com/authorize?';
  const authUrl = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&state=${spotifyStateStr}`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      setRedirectUri(origin);
    }
  }, [redirectUri]);

  useEffect(() => {
    const random16 = crypto
      .getRandomValues(new Uint8Array(16))
      .join('')
      .toString();
    setSpotifyStateStr(random16);
  }, []);

  return (
    <>
      <section className='bg-[#ede0d4] h-screen relative flex flex-col items-center justify-center gap-20 px-4'>
        <div className='text-center'>
          <h1 className='text-3xl'>Clean Spot</h1>
          <p className='text-xl'>
            Clean your favorite explicit Spotify playlists with ease.
          </p>
        </div>
        <div className='text-center'>
          <button className='p-2 border-solid border-2 border-black text-lg shadow-[2px_2px_2px_1px_rgb(0,0,0,1)] active:scale-90 transition-all ease-in-out duration-300'>
            <a href={authUrl}>Login with Spotify</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default login;
