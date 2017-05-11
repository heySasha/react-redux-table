import { ADD_CLASSROOM, DELETE_CLASSROOM, EDIT_CLASSROOM, GET_CLASSROOMS } from '../actions';

function classroomReducer(state = {}, action) {
    switch (action.type) {
        case EDIT_CLASSROOM:
            return state.id_classroom !== action.classroom.id_classroom ? state : action.classroom;
        default:
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_CLASSROOMS:
            //console.log('GET_CLASSROOMS action', action);
            //console.log('GET_CLASSROOMS store', store);
            return action.classrooms;

        case ADD_CLASSROOM:
            return [...state, action.classroom];

        case DELETE_CLASSROOM:
            const index = state.findIndex(classroom => classroom.id_classroom === action.id_classroom);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case EDIT_CLASSROOM:
            return state.map(classroom => classroomReducer(classroom, action));

        default:
            return state;
    }
}

