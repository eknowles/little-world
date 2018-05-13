import { combineReducers } from 'redux-immutable';
import { SampleReducer as sample } from '../src/index';

const combined = combineReducers({
  sample,
});

export default combined;
