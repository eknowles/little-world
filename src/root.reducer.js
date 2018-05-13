import { combineReducers } from 'redux-immutable';
import app from './components/app/app.reducer';

const combined = combineReducers({
  app,
});

export default combined;
