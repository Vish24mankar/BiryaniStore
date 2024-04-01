import { combineReducers } from "redux";
import menureducer from './Menureducer';

const rootReducer = combineReducers({
   menuStore:menureducer
});

export default rootReducer;
