import style from './Results.module.css';
import { SearchSpeciesResults } from '../../types';
import { getSpeciesImage } from '../../api/apiRequest';

interface ResultsProps {
  searchResults: SearchSpeciesResults[];
}

const Results = ({ searchResults }: ResultsProps) => {
  return (
    <>
      {searchResults.map((elem: SearchSpeciesResults) => {
        return (
          <div className={style.star_wars_species} key={elem.name}>
            <div className="name">{elem.name}</div>
            <img
              className={style.image}
              src={getSpeciesImage(elem.url)}
              alt={elem.name}
              title={elem.name}
            />
            <div className={style.species_data}>
              <div>
                <span className="title">Classification:</span> {elem.classification}
              </div>
              <div>
                <span className="title">Average lifespan:</span> {elem.average_lifespan}
                &nbsp;years
              </div>
              <div>
                <span className="title">Language:</span> {elem.language}
              </div>
              <div>
                <span className="title">Eye colors:</span> {elem.eye_colors}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { Results };
