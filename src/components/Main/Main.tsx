import { useContext, useEffect, useState } from 'react';
import { Species } from '../../types';
import { Searcher } from '../../components/Searcher/Searcher';
import { Results } from '../../components/Results/Results';
import { EmptyResult } from '../../components/EmptyResult/EmptyResult';
import { getAllSpecies } from '../../api/apiRequest';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import style from './Main.module.css';
import { Outlet, useNavigate, useParams } from 'react-router';
import { Pagination } from '../Pagination/Pagination';
import { ThemeContext } from '../../context/themeContext';

interface SearchResults {
  results: Species[];
  next: string;
}

const START_PAGE = 1;

const Main = () => {
  const [userInput, setUserInput] = useLocalStorage('');
  const [searchResults, setSearchResults] = useState<Species[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pageNumber, setPageNumber] = useState(START_PAGE);
  const [nextPage, setNextPage] = useState<null | string>(null);
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [wasUseEffUsed, setWasUseEffUsed] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleSearchTermSend = (userInput: string) => {
    setPageNumber(START_PAGE);
    navigate(`/page/${START_PAGE}`);
    setIsLoading(true);
    setUserInput(userInput.trim());
    getSearchResults(userInput, START_PAGE);
  };

  const getSearchResults: (searchString: string, page: number) => Promise<void> = async (
    searchString,
    page
  ) => {
    getAllSpecies(searchString, page)
      .then((data: SearchResults) => {
        setIsLoading(false);
        setSearchResults(data.results);
        let next = null;
        if (data.next) {
          next = (/(page=)\d{1,}/.exec(data.next) as unknown as string)[0].replace('page=', '');
        }
        setNextPage(next);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(`${error}`);
      });
  };

  useEffect(() => {
    if (wasUseEffUsed) return;
    getSearchResults(userInput, pageNumber);
    setWasUseEffUsed(true);
  }, [pageNumber, userInput, wasUseEffUsed]);

  useEffect(() => {
    if (pageId && pageId !== String(pageNumber)) {
      setPageNumber(Number(pageId));
    }
  }, [pageId, pageNumber]);

  const handleBtn = (page: number) => {
    setIsLoading(true);
    setPageNumber(page);
    navigate(`/page/${page}`);
    getSearchResults(userInput, page);
  };

  return (
    <>
      <Searcher searchTermSend={handleSearchTermSend} />
      <section className={style.main} data-theme={theme}>
        {isLoading ? (
          <div className={style.loading}>Loading...</div>
        ) : (
          Array.isArray(searchResults) &&
          (searchResults.length > 0 ? (
            <>
              <div className={style.results_wrapper}>
                <Results searchResults={searchResults} />
                <Outlet />
              </div>
              <Pagination handleBtn={handleBtn} page={pageNumber} nextPage={nextPage} />
            </>
          ) : (
            <EmptyResult searchQuery={userInput} />
          ))
        )}
        {isError && <div className={style.error}>Unfortunately, something went wrong :-/</div>}
      </section>
    </>
  );
};

export { Main };
