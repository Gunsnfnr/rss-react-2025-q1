import { Species } from '../../types';
import { Link } from 'react-router';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import style from './SpeciesCars.module.css';
import React, { useState } from 'react';

interface SpeciesCardProps {
  species: Species;
}

const SpeciesCard = ({ species }: SpeciesCardProps) => {
  const [userInput] = useLocalStorage('');
  const speciesId = (/\/\d{1,}\//.exec(species.url) as unknown as string)[0].replace(/\//g, '');

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e: ', e);
    console.log('isChecked: ', isChecked);
    setIsChecked(!isChecked);
    console.log('isChecked: ', isChecked);
  };

  return (
    <Link to={`species/${speciesId}?search=${userInput}`} className={style.link}>
      <div className={style.star_wars__species} key={species.name}>
        <div className={style.species__element}>
          <div className={style.name}>{species.name}</div>
          <input
            className={style.species__checkbox}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </div>
      </div>
    </Link>
  );
};
export { SpeciesCard };
