import { connect } from 'react-redux';

import From from '../components/Form';
import { addClassroom } from '../actions';

const mapDispatchToProps = dispatch => ({
    onAdd: (id_classroom, number_classroom, count_places, id_building) =>
        dispatch(addClassroom(id_classroom, number_classroom, count_places, id_building))
});

const FormContainer = connect(null, mapDispatchToProps)(From);

export default FormContainer;