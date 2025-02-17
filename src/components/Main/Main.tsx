import { useContext, useEffect } from 'react';
import { Searcher } from '../../components/Searcher/Searcher';
import { Results } from '../../components/Results/Results';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import style from './Main.module.css';
import { Outlet, useNavigate, useParams } from 'react-router';
import { Pagination } from '../Pagination/Pagination';
import { ThemeContext } from '../../context/themeContext';
import { swSpeciesApi } from '../../store/apiSlice';
import { useSearchParams } from 'react-router';

export const START_PAGE = 1;

const Main = () => {
  const [userInput, setUserInput] = useLocalStorage('');
  const { pageId } = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const pageIdIsNotNumber = !/^[0-9]+$/.test(pageId as string);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, error, isFetching } = swSpeciesApi.useGetAllSpeciesQuery({
    request: searchParams.get('search') || '',
    page: Number(pageId),
  });

  const handleSearchTermSend = (userInput: string) => {
    setUserInput(userInput.trim());
    navigate(`/page/${START_PAGE}?search=${userInput.trim()}`);
  };

  useEffect(() => {
    if (!searchParams.get('search')) setSearchParams({ search: userInput.trim() });
    const searchTermFromUrl = searchParams.get('search');
    if (searchTermFromUrl) setUserInput(searchTermFromUrl);
  }, []);

  useEffect(() => {
    if (pageId && pageIdIsNotNumber) {
      navigate('/404');
    }
  }, [pageId, navigate, pageIdIsNotNumber]);

  return (
    <>
      <Searcher searchTermSend={handleSearchTermSend} />
      <section className={style.main} data-theme={theme}>
        {isFetching ? (
          <div className={style.loading}>Loading...</div>
        ) : (
          <>
            <div className={style.results_wrapper}>
              <Results searchResults={data?.results} error={error} />
              <Outlet />
            </div>
            {data && data.results.length > 0 && <Pagination nextPage={data.next} />}
          </>
        )}
      </section>
    </>
  );
};

export { Main };
