import cenas ,{ canDrink, isAdult } from './person.js';
//nos defaults o nome não é importante logo o qqcoisa vai fazer o default
import qqcoisa, {square, add} from './utils.js';

import AppRouter from './Routers/AppRouter'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
);
ReactDOM.render(jsx , document.getElementById('app'));