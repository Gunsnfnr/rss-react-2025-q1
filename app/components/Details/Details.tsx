import style from './Details.module.css';
import { Link, useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router';
import type { Species } from '~/types';

interface DetailsProps {
  detailsData: Species;
}

const Details = ({ detailsData }: DetailsProps) => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get('search');

  return (
    <>
      {detailsData && (
        <>
          <div className={style.species_details_wrapper}>
            <div className={style.species_details}>
              <div className={style.name}>{detailsData.name}</div>
              <div className={style.species_data}>
                <div>
                  <span className={style.title}>Classification:</span>{' '}
                  <span className={style.text}>{detailsData.classification}</span>
                </div>
                <div>
                  <span className={style.title}>Average lifespan:</span>{' '}
                  <span className={style.text}>{detailsData.average_lifespan}</span>
                  <span className={style.text}>&nbsp;years</span>
                </div>
                <div>
                  <span className={style.title}>Average height:</span>{' '}
                  <span className={style.text}>{detailsData.average_height}</span>
                  <span className={style.text}>&nbsp;cm</span>
                </div>
                <div>
                  <span className={style.title}>Language:</span>{' '}
                  <span className={style.text}>{detailsData.language}</span>
                </div>
                <div>
                  <span className={style.title}>Eye colors:</span>{' '}
                  <span className={style.text}>{detailsData.eye_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Hair colors:</span>{' '}
                  <span className={style.text}>{detailsData.hair_colors}</span>
                </div>
                <div>
                  <span className={style.title}>Skin colors:</span>{' '}
                  <span className={style.text}>{detailsData.skin_colors}</span>
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
    </>
  );
};

export { Details };
