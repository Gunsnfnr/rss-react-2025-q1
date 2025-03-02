import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/page/1');
  }, [router]);

  return <></>;
};

export default Page;
