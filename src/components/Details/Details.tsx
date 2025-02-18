import style from './Details.module.css';
import { Link, useNavigate, useParams } from 'react-router';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { swSpeciesApi } from '../../store/apiSlice';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [userInput] = useLocalStorage('');
  const { data, error, isFetching } = swSpeciesApi.useGetSpeciesQuery({
    speciesId: id as string,
  });

  return (
    <>
      {isFetching && <div className={style.loading_details}>Loading...</div>}
      {!isFetching && data && (
        <>
          <div className={style.species_details_wrapper}>
            <div className={style.species_details}>
              <div className={style.name}>{data.name}</div>
              <div className={style.species_data}>
                <div>
                  <span className={style.title}>Classification:</span>{' '}
                  <span className={style.text}>{data.classification}</span>
                </div>
                <div>
                  <span className={style.title}>Average lifespan:</span>{' '}
                  <span className={style.text}>{data.average_lifespan}</span>
                  <span className={style.text}>&nbsp;years</span>
                </div>
                <div>
                  <span className={style.title}>Average height:</span>{' '}
                  <span className={style.text}>{data.average_height}</span>
                  <span className={style.text}>&nbsp;cm</span>
                </div>
                <div>
                  <span className={style.title}>Language:</span>{' '}
                  <span className={style.text}>{data.language}</span>
                </div>
                <div>
                  <span className={style.title}>Eye colors:</span>{' '}
                  <span className={style.text}>{data.eye_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Hair colors:</span>{' '}
                  <span className={style.text}>{data.hair_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Skin colors:</span>{' '}
                  <span className={style.text}>{data.skin_colors}</span>
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
      {error && (
        <div className={style.error_wrapper}>
          <div className={style.error}>Unfortunately, something went wrong :-/</div>
          <Link to={`/page/${pageId}/?search=${userInput}`}>
            <button className={style.close}>Close</button>
          </Link>
        </div>
      )}
    </>
  );
};

export { Details };
