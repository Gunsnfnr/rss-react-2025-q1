'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const InitialPage = () => {
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

export default InitialPage;
