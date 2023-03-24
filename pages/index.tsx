import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenState } from '@/atoms/tokenAtom';

export default function Home() {
  const [user, setUser] = useState({});
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
        .then(data => setUser(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <h1>hello {user?.display_name}</h1>
    </>
  );
}
