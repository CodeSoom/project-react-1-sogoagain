import { combineReducers } from 'redux';
import ideaReducer from './features/ideaSlice';

export default combineReducers({
  idea: ideaReducer,
});
