'use client';
import { useContext, useEffect, useState } from 'react';
import { Searcher } from '../../components/Searcher/Searcher';
import { Results } from '../../components/Results/Results';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import style from './Main.module.css';
import { Pagination } from '../Pagination/Pagination';
import { ThemeContext } from '../../context/themeContext';
import { SelectedCards } from '../SelectedCards/SelectedCards';
import { Details } from '../Details/Details';
import { SearchResults, Species } from '../../types';
import { useSearchParams, useRouter, useParams } from 'next/navigation';

export const START_PAGE = 1;

const Main = ({
  allSpeciesData,
  speciesData,
}: {
  allSpeciesData: SearchResults;
  speciesData: Species;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [storedSearchTerm, setStoredSearchTerm] = useLocalStorage('');
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const params = useParams();
  const { pagenumber } = params as Record<string, string>;

  useEffect(() => {
    const searchTermFromUrl = searchParams?.get('search') ?? '';
    const id = searchParams?.get('id');

    if (searchTermFromUrl && searchTermFromUrl !== storedSearchTerm) {
      setIsLoading(true);
      setStoredSearchTerm(searchTermFromUrl);
    }

    if (isInitialLoad) {
      router.push(
        `/page/${pagenumber}?search=${searchTermFromUrl || storedSearchTerm}
${id ? '&id=' + id : ''}`
      );
      setIsLoading(true);
      setIsInitialLoad(false);

      if (searchTermFromUrl !== undefined) {
        setStoredSearchTerm(searchTermFromUrl);
      }

      return;
    }
  }, []);

  useEffect(() => {
    if (
      (allSpeciesData && allSpeciesData.results?.length > 0) ||
      (allSpeciesData && allSpeciesData.count === 0)
    ) {
      setIsLoading(false);
    }
  }, [allSpeciesData]);

  const handleSearchTermSend = (userInput: string) => {
    setStoredSearchTerm(userInput);
    setIsLoading(true);
    router.push(`/page/${START_PAGE}?search=${userInput}`);
  };

  return (
    <>
      <Searcher searchTermSend={handleSearchTermSend} />
      <section className={style.main} data-theme={theme}>
        {isLoading ? (
          <div className={style.loading}>Loading...</div>
        ) : (
          allSpeciesData && (
            <>
              <div className={style.results_wrapper}>
                <Results searchResults={allSpeciesData.results} />
                <Details speciesData={speciesData} />
              </div>
              {allSpeciesData.results?.length > 0 && (
                <Pagination
                  setIsLoading={setIsLoading}
                  pagenumber={pagenumber}
                  nextPage={allSpeciesData.next}
                />
              )}
            </>
          )
        )}
        <SelectedCards />
      </section>
    </>
  );
};

export { Main };
