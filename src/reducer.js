import { combineReducers } from 'redux';

import ideaReducer from './features/ideaSlice';
import ideasReducer from './features/ideasSlice';
import contributingReducer from './features/contributingSlice';

export default combineReducers({
  idea: ideaReducer,
  ideas: ideasReducer,
  contributing: contributingReducer,
});
