import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenAtom';
import Router, { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

export default function Home({ code, authState, redirectUri }) {
  const [token, setToken] = useRecoilState(tokenState);
  console.log(token);

  useEffect(() => {
    const params = window.location.hash.split('&');
    const accessToken = params[0].split('=')[1];
    setToken(accessToken);
    console.log(accessToken);
  }, []);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
}

export const getServerSideProps = async (context): any => {
  try {
    const redirectUri = `http://${context.req.headers.host}`;
    const code = context.query.code;
    const authState = context.query.state;

    const authParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      },
    };

    const res = await fetch('http://https://accounts.spotify.com/api/token');
    const data = await res.json();
    console.log(data);
    return { props: { code, authState, redirectUri } };
  } catch (error) {
    return { props: { error: 'trouble' } };
  }
};
