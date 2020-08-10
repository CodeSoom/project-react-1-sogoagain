import { combineReducers } from 'redux';

import ideaReducer from './features/ideaSlice';
import contributingReducer from './features/contributingSlice';

export default combineReducers({
  idea: ideaReducer,
  contributing: contributingReducer,
});
