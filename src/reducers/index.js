import { combineReducers } from 'redux';

import { changeReducer } from './changeReducer';

const rootReducer = combineReducers({
    repoSelected : changeReducer
});

export default rootReducer;