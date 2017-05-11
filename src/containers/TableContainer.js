import { connect } from 'react-redux';

import Table from '../components/Table';
import { deleteClassroom, editClassroom } from '../actions';

const mapStateToProps = state => {
    //console.log(state);
    return { classrooms: state.classrooms };
};

const mapDispatchToProps = dispatch => ({
    onDelete: id_classroom => dispatch(deleteClassroom(id_classroom)),
    onEdit: (id_classroom, number_classroom, count_places, id_building) =>
        dispatch(editClassroom(id_classroom, number_classroom, count_places, id_building))
});

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);

export default TableContainer;