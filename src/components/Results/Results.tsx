import style from './Results.module.css';
import { Species } from '../../types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { EmptyResult } from '../EmptyResult/EmptyResult';
import { SpeciesCard } from '../SpeciesCard/SpeciesCard';

interface ResultsProps {
  searchResults?: Species[];
  error: FetchBaseQueryError | SerializedError | undefined;
}

const Results = ({ searchResults, error }: ResultsProps) => {
  return (
    <>
      {searchResults && searchResults.length > 0 ? (
        <div className={style.results}>
          {searchResults.map((elem: Species) => (
            <SpeciesCard species={elem} key={elem.name} />
          ))}
        </div>
      ) : (
        <EmptyResult error={error} />
      )}
    </>
  );
};

export { Results };
