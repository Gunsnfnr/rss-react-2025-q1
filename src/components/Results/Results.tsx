import style from './Results.module.css';
import { Species } from '../../types';
import { getSpeciesImage } from '../../api/apiRequest';
import { Link } from 'react-router';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { EmptyResult } from '../EmptyResult/EmptyResult';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface ResultsProps {
  searchResults?: Species[];
  error: FetchBaseQueryError | SerializedError | undefined;
}

const Results = ({ searchResults, error }: ResultsProps) => {
  const [userInput] = useLocalStorage('');
  return (
    <>
      {searchResults && searchResults.length > 0 ? (
        <div className={style.results}>
          {searchResults.map((elem: Species) => {
            const speciesId = (/\/\d{1,}\//.exec(elem.url) as unknown as string)[0].replace(
              /\//g,
              ''
            );
            return (
              <Link
                to={`species/${speciesId}?search=${userInput}`}
                key={elem.name}
                className={style.link}
              >
                <div className={style.star_wars_species} key={elem.name}>
                  <div className={style.name}>{elem.name}</div>
                  <img
                    className={style.image}
                    src={getSpeciesImage(elem.url)}
                    alt={elem.name}
                    title={elem.name}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <EmptyResult error={error} />
      )}
    </>
  );
};

export { Results };
