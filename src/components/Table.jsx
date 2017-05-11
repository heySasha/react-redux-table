import  React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

function Table(props) {
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <td>Номер</td>
                <td>К-сть місць</td>
                <td/>
            </tr>
            </thead>
            <tbody>
            {props.classrooms.map(classroom =>
                <Row
                    key={classroom.id_classroom}
                    id_classroom={classroom.id_classroom}
                    number_classroom={classroom.number_classroom}
                    count_places={classroom.count_places}
                    id_building={classroom.id_building}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}/>)}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    classrooms: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Table;