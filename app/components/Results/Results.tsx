import style from './Results.module.css';
import { type Species } from '../../types';
import { EmptyResult } from '../EmptyResult/EmptyResult';
import { SpeciesCard } from '../SpeciesCard/SpeciesCard';

interface ResultsProps {
  searchResults?: Species[];
}

const Results = ({ searchResults }: ResultsProps) => {
  return (
    <>
      {searchResults && searchResults.length > 0 ? (
        <div className={style.results}>
          {searchResults.map((elem: Species) => (
            <SpeciesCard species={elem} key={elem.name} />
          ))}
        </div>
      ) : (
        <EmptyResult />
      )}
    </>
  );
};

export { Results };
