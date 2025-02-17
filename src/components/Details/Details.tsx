import { useEffect, useState } from 'react';
import style from './Details.module.css';
import { Link, useNavigate, useParams } from 'react-router';
import { Species } from '../../types';
import { getSpecies } from '../../api/apiRequest';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { pageId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [species, setSpecies] = useState<Species | undefined>(undefined);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const [userInput] = useLocalStorage('');

  useEffect(() => {
    setIsLoading(true);
    getSpeciesDetails(id as string);
  }, [id]);

  const getSpeciesDetails: (id: string) => Promise<void> = async (id) => {
    getSpecies(id as string)
      .then((data: Species) => {
        setIsLoading(false);
        setSpecies(data);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(`${error}`);
      });
  };

  return (
    <>
      {isLoading && <div className={style.loading_details}>Loading...</div>}
      {!isLoading && species && (
        <>
          <div className={style.species_details_wrapper}>
            <div className={style.species_details}>
              <div className={style.name}>{species.name}</div>
              <div className={style.species_data}>
                <div>
                  <span className={style.title}>Classification:</span>{' '}
                  <span className={style.text}>{species.classification}</span>
                </div>
                <div>
                  <span className={style.title}>Average lifespan:</span>{' '}
                  <span className={style.text}>{species.average_lifespan}</span>
                  <span className={style.text}>&nbsp;years</span>
                </div>
                <div>
                  <span className={style.title}>Average height:</span>{' '}
                  <span className={style.text}>{species.average_height}</span>
                  <span className={style.text}>&nbsp;cm</span>
                </div>
                <div>
                  <span className={style.title}>Language:</span>{' '}
                  <span className={style.text}>{species.language}</span>
                </div>
                <div>
                  <span className={style.title}>Eye colors:</span>{' '}
                  <span className={style.text}>{species.eye_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Hair colors:</span>{' '}
                  <span className={style.text}>{species.hair_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Skin colors:</span>{' '}
                  <span className={style.text}>{species.skin_colors}</span>
                </div>
              </div>
              <Link to={`/page/${pageId}/?search=${userInput}`} className={style.close}>
                <button>Close</button>
              </Link>
            </div>
          </div>
          <div
            className={style.details_backdrop}
            onClick={() => navigate(`/page/${pageId}/?search=${userInput}`)}
            aria-label="Close"
          ></div>
        </>
      )}
      {isError && (
        <>
          <div className={style.error}>Unfortunately, something went wrong :-/</div>
          <Link to={`/page/${pageId}/?search=${userInput}`}>
            <button className={style.close}>Close</button>
          </Link>
        </>
      )}
    </>
  );
};

export { Details };
