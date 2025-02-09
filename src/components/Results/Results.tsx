import style from './Results.module.css';
import { Species } from '../../types';
import { getSpeciesImage } from '../../api/apiRequest';
import { Link } from 'react-router';

interface ResultsProps {
  searchResults: Species[];
}

const Results = ({ searchResults }: ResultsProps) => {
  return (
    <div className={style.results}>
      {searchResults.map((elem: Species) => {
        const speciesId = (/\/\d{1,}\//.exec(elem.url) as unknown as string)[0].replace(/\//g, '');
        return (
          <Link to={`species/${speciesId}`} key={elem.name} className={style.link}>
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
  );
};

export { Results };
