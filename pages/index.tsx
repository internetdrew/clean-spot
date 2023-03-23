import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
}
