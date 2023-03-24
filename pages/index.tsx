import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenState } from '@/atoms/tokenAtom';

export default function Home() {
  // console.log(user);
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    const params = window.location.hash.split('&');
    const accessToken = params[0].split('=')[1];
    setToken(accessToken);
    try {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + accessToken,
        },
      })
        .then(res => res.json())
        .then(data => console.log(data));
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
