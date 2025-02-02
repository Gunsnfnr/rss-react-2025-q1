import React from 'react';
import './EmptyResult.css';

interface EmptyResultProps {
  searchQuery: string;
}

export default class EmptyResult extends React.Component<EmptyResultProps> {
  render() {
    return (
      <>
        <div className="empty">
          <div>
            Nothing was found for the search term &quot;
            {this.props.searchQuery}
            &quot;.
          </div>
          <div>Don&apos;t forget, we are looking for Star Wars species o_0</div>
        </div>
      </>
    );
  }
}
