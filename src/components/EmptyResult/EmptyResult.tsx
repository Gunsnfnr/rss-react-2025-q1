import { useEffect, useState } from 'react';
import style from './EmptyResult.module.css';
import { useRouter } from 'next/router';

const EmptyResult = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const searchTermFromUrl = router.query.search as string;
    const storedSearchTerm: string | null = localStorage.getItem('gunsnfnr.swQuery');
    if (searchTermFromUrl !== undefined) {
      setUserInput(searchTermFromUrl);
    } else if (storedSearchTerm) {
      setUserInput(storedSearchTerm);
    }
  }, [router.query.search]);
  return (
    <>
      <div className={style.empty}>
        <>
          <div>Nothing was found for the search term &quot;{userInput}&quot;</div>
          <div>Don&apos;t forget, we are looking for Star Wars species o_0</div>
        </>
      </div>
    </>
  );
};

export { EmptyResult };
