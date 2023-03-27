import { useEffect, useState } from 'react';

export default function Home({ accessToken }: any) {
  const [token, setToken] = useState({});
  console.log(token);

  return (
    <>
      <h1>hello</h1>
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

export const getServerSideProps = async () => {
  const authParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
  };
  const res = await fetch('https://accounts.spotify.com/api/token', authParams);
  const data = await res.json();
  console.log(data);

  return { props: { accessToken: data.access_token } };
};
