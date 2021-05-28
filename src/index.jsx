import React from 'react';
import { render } from 'react-dom';
import './style.css';

import {tony} from './components/Klavesy/tony'

import { Klavesy } from './components/Klavesy/index';

const App = () => (
    <Klavesy />
);

render(<App />, document.querySelector('#app'));
