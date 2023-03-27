import { useEffect, useState } from 'react';

type User = {
  display_name: string;
};

export default function Home() {
  const [token, setToken] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    setToken(window.location.hash.split('&')[0].split('=')[1]);
    console.log(token);

    fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setUser(data));
  }, [token]);

  return (
    <>
      <h1>hello {user.display_name}</h1>
      {/* <section className='h-screen text-center flex flex-col items-center justify-center'>
        <button onClick={signOut}>Sign out</button>
        <h1>Test</h1>
        <div className='border-2 border-black rounded-2xl  shadow-[2px_2px_2px_1px_rgb(0,0,0,1)]'>
          <header className='text-center border-b-2 border-black'>
            <div>
              <h2 className='text-xl p-2'>Choose a playlist to clean below:</h2>
            </div>
          </header>
          <div className='max-h-96 overflow-y-scroll p-4 scrollbar-hide'>
            <div className='space-y-4'>
              {userPlaylists?.items?.map(
                (playlist: { id: Key | null | undefined }) => (
                  <Playlist key={playlist.id} playlist={playlist} />
                )
              )}
            </div>
          </div>
          <p className='text-center border-t-2 border-black p-2'>
            Scroll to see more
          </p>
        </div>
      </section> */}
    </>
  );
}
