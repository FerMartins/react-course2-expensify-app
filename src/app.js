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

store.dispatch(addExpense({ description : 'Water bill' , amount: 100 , createdAt: 550000 }));
store.dispatch(addExpense({ description : 'Gas bill' , amount: 30 , createdAt: 5123455 }));
store.dispatch(addExpense({ description : 'Rent' , amount: 100 , createdAt: 109000 }));


store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
);
ReactDOM.render(jsx , document.getElementById('app'));