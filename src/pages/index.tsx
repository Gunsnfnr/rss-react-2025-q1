import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/page/1');
  }, [router]);

  return (
    <>
      <Head>
        <title>Next.js React App</title>
      </Head>
    </>
  );
};

export default Page;
