import { combineReducers } from 'redux';

import Words from './Words';
import ActiveWord from './Words/ActiveWord';

const allReducers = combineReducers({
  words: Words,
  activeWord: ActiveWord
});

export default allReducers;
