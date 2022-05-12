import { combineReducers } from "redux";
import albumReducer from '../../List/slice';

const rootReducer = combineReducers({

  album:albumReducer

});

export default rootReducer;
