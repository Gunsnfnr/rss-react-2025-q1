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
              <img className="image" src={getSpeciesImage(elem.url)} />
              <div className="species-data">
                <div className="classification">Classification: {elem.classification}</div>
                <div className="average_lifespan">
                  Average lifespan: {elem.average_lifespan} years
                </div>
                <div className="language">Language: {elem.language}</div>
                <div className="eye-color">Eye colors: {elem.eye_colors}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
