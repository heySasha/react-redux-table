import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Classrooms from './components';
import { getClassrooms } from './actions';
import store from './store';

store.dispatch(getClassrooms());

function App() {
    return (
        <Provider store={store}>
            <Classrooms/>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));