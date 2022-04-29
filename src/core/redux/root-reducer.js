import { combineReducers } from 'redux';
import homeReducer from '../../features/home/services/slice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
