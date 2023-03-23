import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenAtom';
import Router, { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

export default function Home() {
  const [token, setToken] = useRecoilState(tokenState);
  const router = useRouter();

  useEffect(() => {
    // const hash = window.location.hash;
    // if (!hash) Router.push('/login');

    // const authValues = window.location.hash.substring(1).split('&');
    // const token = authValues[0].split('=')[1];
    // setToken(token);
    const code = router.query.code;
    const authStateValue = router.query.state || null;

    // if (authStateValue === null) Router.push('/login');

    const authParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {},
    };
  }, []);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
}
