import {combineReducers} from 'redux';

import userReducer from './user/user.redux';
import reportReducer from './report/report.redux';


export default combineReducers({
    user: userReducer,
    report: reportReducer

}) 