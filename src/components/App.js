import React from 'react';

import WordList from '../containers/WordList';
import WordDetails from '../containers/WordDetails';

const App = () => {
  return <div className="container">
    <h2>Words:</h2>
    <hr/>
    <WordList />
    <hr/>
    <WordDetails />
  </div>;
};

export default App;
