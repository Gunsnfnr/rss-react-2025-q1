'use client';

import { useEffect, useState } from 'react';
import style from './EmptyResult.module.css';
import { useSearchParams } from 'next/navigation';

const EmptyResult = () => {
  const searchParams = useSearchParams();
  console.log('searchParams: ', searchParams);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const search = searchParams?.get('search') ?? '';
    const storedSearchTerm: string | null = localStorage.getItem('gunsnfnr.swQuery');
    if (search !== undefined) {
      setUserInput(search);
    } else if (storedSearchTerm) {
      setUserInput(storedSearchTerm);
    }
  }, [searchParams]);
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
