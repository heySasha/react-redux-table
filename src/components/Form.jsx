import React from 'react';
import PropTypes from 'prop-types';

import Button from '../lib/Button';

class BuildingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number_classroom: '',
            count_places: 0,
            id_building: 1
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNumberClassroom = this.handleChangeNumberClassroom.bind(this);
        this.handleChangeCountPlaces = this.handleChangeCountPlaces.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let number_classroom = this.state.number_classroom;
        let count_places = this.state.count_places;
        //console.log(value, shortValue, selectedType);
        if (number_classroom) {
            this.props.onAdd(undefined, number_classroom, count_places, 1);
            this.setState({
                number_classroom: '',
                count_places: 0
            });
        }
    }

    handleChangeNumberClassroom(event) {
        let number_classroom = event.target.value;
        this.setState({ number_classroom });
    }

    handleChangeCountPlaces(event) {
        let count_places = Number( event.target.value );
        this.setState({ count_places });
    }

    render() {
        const disabled = !this.state.number_classroom;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.number_classroom}
                    placeholder="Номер"
                    onChange={this.handleChangeNumberClassroom} />
                <input
                    type="text"
                    value={this.state.count_places}
                    placeholder="К-сть місць"
                    onChange={this.handleChangeCountPlaces} />

                <Button type="submit" disabled={disabled}>Добавить</Button>
            </form>
        );
    }
}

BuildingForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default BuildingForm;