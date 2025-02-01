import React from 'react';
import './Results.css';
import { SearchPeopleResults } from '../Main/Main';

interface ResultsProps {
  searchResults: SearchPeopleResults[];
}

export default class Results extends React.Component<ResultsProps> {
  render(): React.ReactNode {
    return (
      <>
        {this.props.searchResults.map((elem: SearchPeopleResults, index: number) => {
          return (
            <div className="star-wars-character" key={index}>
              <div className="name">{elem.name}</div>
              <div className="character-data">
                <div className="height">Height: {elem.height} cm</div>
                <div className="mass">Mass: {elem.mass} kg</div>
                <div className="birth-year">Birth year: {elem.birth_year}</div>
                <div className="eye-color">Eye color: {elem.eye_color}</div>
                <div className="skin-color">Skin color: {elem.skin_color}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
