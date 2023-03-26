import { Key, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenAtom';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import Playlist from '@/components/Playlist';

export default function Home({ userInfo, userPlaylists }: any) {
  return (
    <>
      <section className='h-screen text-center flex flex-col items-center justify-center'>
        <h1>Test</h1>
        <div className='border-2 border-black rounded-2xl  shadow-[2px_2px_2px_1px_rgb(0,0,0,1)]'>
          <header className='text-center border-b-2 border-black'>
            <div>
              <h2 className='text-xl p-2'>Choose a playlist to clean below:</h2>
            </div>
          </header>
          <div className='max-h-96 overflow-y-scroll p-4 scrollbar-hide'>
            <div className='space-y-4'>
              {userPlaylists.items.map(
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
      </section>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) return { redirect: { destination: '/login' } };

  const userRes = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const userInfo = await userRes.json();

  const playlistsRes = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const userPlaylists = await playlistsRes.json();

  return { props: { userInfo, userPlaylists } };
};
