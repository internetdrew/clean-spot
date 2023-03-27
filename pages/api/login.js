import { v4 } from 'uuid';

export default function handler(req, res) {
  const authState = v4();
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const redirectUrl = req.body;
  console.log(redirectUrl);

  res.status(200).json({
    authUrl: `accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&state=${authState}`,
  });
}
