import React from 'react';
import './Results.css';
import { SearchSpeciesResults } from '../../types';
import { getSpeciesImage } from '../../api/apiRequest';

interface ResultsProps {
  searchResults: SearchSpeciesResults[];
}

export default class Results extends React.Component<ResultsProps> {
  render(): React.ReactNode {
    return (
      <>
        {this.props.searchResults.map((elem: SearchSpeciesResults) => {
          return (
            <div className="star-wars-species" key={elem.name}>
              <div className="name">{elem.name}</div>
              <img
                className="image"
                src={getSpeciesImage(elem.url)}
                alt={elem.name}
                title={elem.name}
              />
              <div className="species-data">
                <div className="classification">
                  <span className="title">Classification:</span> {elem.classification}
                </div>
                <div className="average_lifespan">
                  <span className="title">Average lifespan:</span> {elem.average_lifespan}
                  &nbsp;years
                </div>
                <div className="language">
                  <span className="title">Language:</span> {elem.language}
                </div>
                <div className="eye-color">
                  <span className="title">Eye colors:</span> {elem.eye_colors}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
