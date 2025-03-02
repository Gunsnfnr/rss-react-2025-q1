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
import useLoading from '../../hooks/useLoading';
import { useRouter } from 'next/router';

export const START_PAGE = 1;

const Main = ({
  allSpeciesData,
  speciesData,
}: {
  allSpeciesData: SearchResults;
  speciesData: Species;
}) => {
  const router = useRouter();
  const [storedSearchTerm, setStoredSearchTerm] = useLocalStorage('');
  const { theme } = useContext(ThemeContext);
  const [isLoading] = useLoading();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const searchTermFromUrl = router.query.search as string;

    if (searchTermFromUrl && searchTermFromUrl !== storedSearchTerm) {
      setStoredSearchTerm(searchTermFromUrl);
    }

    if (isInitialLoad) {
      if (searchTermFromUrl !== undefined) {
        setStoredSearchTerm(searchTermFromUrl);
      }
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, search: searchTermFromUrl ?? storedSearchTerm },
        },
        undefined,
        { shallow: true }
      );

      setIsInitialLoad(false);
      return;
    }
  }, []);

  const handleSearchTermSend = (userInput: string) => {
    setStoredSearchTerm(userInput);
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
              {allSpeciesData.results.length > 0 && <Pagination nextPage={allSpeciesData.next} />}
            </>
          )
        )}
        <SelectedCards />
      </section>
    </>
  );
};

export { Main };
