import { v4 } from 'uuid';

export default function handler(req, res) {
  const authState = v4();
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const redirectUrl = `http://${req.headers.host}`;
  console.log(req);
  const reqStr = JSON.stringify(req.query);
  res.status(200).json({
    url: `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&state=${authState}`,
    authState,
    reqStr,
  });
}
