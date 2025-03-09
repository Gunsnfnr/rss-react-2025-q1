import { useContext, useEffect, useState } from 'react';
import { Searcher } from '../../components/Searcher/Searcher';
import { Results } from '../../components/Results/Results';
import style from './Main.module.css';
import { useNavigate, useParams } from 'react-router';
import { Pagination } from '../Pagination/Pagination';
import { ThemeContext } from '../../context/themeContext';
import { useSearchParams } from 'react-router';
import { SelectedCards } from '../SelectedCards/SelectedCards';
import type { SearchResults, Species } from '~/types';
import { Details } from '../Details/Details';

export const START_PAGE = 1;

interface MainPageProps {
  data: SearchResults;
  detailsData: Species;
}

const Main = ({ data, detailsData }: MainPageProps) => {
  const [userInput, setUserInput] = useState('');
  const { pageId } = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const pageIdIsNotANumber = !/^[0-9]+$/.test(pageId as string);
  const [searchParams, setSearchParams] = useSearchParams();

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
    if (pageId && pageIdIsNotANumber) {
      navigate('/404');
    }
  }, [pageId, navigate, pageIdIsNotANumber]);

  return (
    <>
      <Searcher searchTermSend={handleSearchTermSend} />
      <section className={style.main} data-theme={theme}>
        {!data ? (
          <div className={style.loading}>Loading...</div>
        ) : (
          <>
            <div className={style.results_wrapper}>
              <Results searchResults={data?.results} />
              {pageId && <Details detailsData={detailsData} />}
            </div>
            {data && data.results.length > 0 && <Pagination nextPage={data.next} />}
          </>
        )}
        <SelectedCards />
      </section>
    </>
  );
};

export { Main };
