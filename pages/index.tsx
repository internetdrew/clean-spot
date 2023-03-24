import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '@/atoms/tokenAtom';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState({});
  const [token, setToken] = useRecoilState(tokenState);
  const router = useRouter();

  useEffect(() => {
    const params = window.location.hash.split('&');
    const accessToken = params[0]?.split('=')[1];
    const returnedStateVar = params[3]?.split('=')[1];
    const localStateVar = localStorage.getItem('authState');
    if (!returnedStateVar || !params || returnedStateVar !== localStateVar)
      router.push('/login');
    setToken(accessToken);
    try {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + accessToken,
        },
      })
        .then(res => res.json())
        .then(data => setUser(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
}
