import React from 'react';
import { SearchPeopleResults } from '../Search/Search';

interface ResultProps {
  searchResult: SearchPeopleResults[];
}

export default class Result extends React.Component<ResultProps> {
  render(): React.ReactNode {
    return (
      <>
        {this.props.searchResult.map(
          (elem: SearchPeopleResults, index: number) => {
            return (
              <div className="" key={index}>
                {JSON.stringify(elem)}
              </div>
            );
          }
        )}
      </>
    );
  }
}
