import React from 'react';

interface EmptyResultProps {
  searchQuery: string;
}

export default class EmptyResult extends React.Component<EmptyResultProps> {
  render() {
    return (
      <>
        <div>
          Nothing was found for the search term &quot;{this.props.searchQuery}
          &quot;.
        </div>
        <div>
          Don&apos;t forget, we are looking for a Star Wars characters o_0
        </div>
      </>
    );
  }
}
