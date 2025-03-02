import { Species } from '../../types';
import style from './SpeciesCars.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, removeCard } from '../../store/cardsSlice';
import { RootState } from '../../store';
import { useRouter } from 'next/router';

interface SpeciesCardProps {
  species: Species;
}

const SpeciesCard = ({ species }: SpeciesCardProps) => {
  const speciesId = (/\/\d{1,}\//.exec(species.url) as unknown as string)[0].replace(/\//g, '');
  const [isChecked, setIsChecked] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const dispatch = useDispatch();
  const selectedCards = useSelector((state: RootState) => state.speciesCards.selectedCards);
  const isInSelected = selectedCards.some((card) => card.name === species.name);
  const router = useRouter();

  useEffect(() => {
    if (isInSelected) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [isInSelected, selectedCards, species.name]);

  const handleCheckboxChange = () => {
    setIsUserInteracting(true);
    setIsChecked(!isChecked);
    if (!isChecked) {
      dispatch(addCard(species));
    } else {
      dispatch(removeCard(species));
    }
  };

  const handleCharacterCardClick = () => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, id: speciesId },
    });
  };

  const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <div onClick={handleCharacterCardClick} className={style.link}>
      <div className={style.star_wars__species} key={species.name}>
        <div className={style.species__element}>
          <div className={style.name}>{species.name}</div>
          <input
            className={`${style.species__checkbox}
              ${isUserInteracting ? style['user-interacted'] : ''}`}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            onClick={handleCheckboxClick}
          />
        </div>
      </div>
    </div>
  );
};
export { SpeciesCard };
