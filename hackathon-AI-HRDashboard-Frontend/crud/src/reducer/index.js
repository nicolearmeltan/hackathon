import user from './user';
import navigation from './navigation';
import home from './home';
import ailment from './ailments';
import quality from './qol'
import { combineReducers } from 'redux';

export default combineReducers({
  navigation,
  user,
  home,
  ailment,
  quality
})