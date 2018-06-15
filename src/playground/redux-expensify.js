import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'


const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})






//Get visible expenses

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe (() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description : 'Rent' , amount: 100 , createdAt: -11000 }));
const expenseTwo = store.dispatch(addExpense({ description : 'Coffee' , amount: 300 , createdAt: -1000 }));

store.dispatch(setTextFilter('e'));

/*
store.dispatch(removeExpense({ id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500 }));

store.dispatch(setTextFilter())


store.dispatch(sortByDate());
*/
/*
store.dispatch(setEndDate(1250));

store.dispatch(setStartDate(-2000));

store.dispatch(setStartDate());
*/
store.dispatch(sortByAmount());

const demoState = {
    expenses: [{
        id: 'sdasda',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};