import { createStore } from 'redux';

// Action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})


const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1- pure functions
// 2- never change state or action

const countReducers = (state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;

    }
};

const store = createStore(countReducers);

const unsubscribe = store.subscribe(() => {
    console.log("subscribe ",store.getState());
})
console.log(store.getState());
/*
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})*/

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(resetCount());

/*store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})
*/
store.dispatch (decrementCount ({decrementBy: 10}));
store.dispatch(decrementCount());
store.dispatch(setCount({count: 101}));



unsubscribe();






console.log(store.getState());
