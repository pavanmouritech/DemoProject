import { combineReducers } from "redux";
import albumReducer from '../slice';

const rootReducer = combineReducers({

  album:albumReducer

});

export default rootReducer;
