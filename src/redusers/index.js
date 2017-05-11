import { combineReducers } from 'redux';

import { default as classroomsReducer } from './classrooms';

const reducer = combineReducers({
    classrooms: classroomsReducer
});

export default reducer;