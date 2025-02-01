import React from 'react';
import Main from './components/Main/Main';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}
