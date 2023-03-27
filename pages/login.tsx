const login = ({ authUrl, protocol }: any) => {
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
              <a href={`${protocol}${authUrl}`}>Login with Spotify</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;

export const getServerSideProps = async ({ req, res }: any) => {
  const baseUrl = req.headers.referer.split('/login')[0];
  const protocol = req.headers.referer.split(':')[0] + '://';
  const response = await fetch(`${baseUrl}/api/login`);
  const { authUrl } = await response.json();
  return { props: { authUrl, protocol } };
};
