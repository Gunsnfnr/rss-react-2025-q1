import React from 'react';
import Search from './components/Search/Search';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Search />
      </div>
    );
  }
}
