import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpenseComponent extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1> Add expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                 />
            </div>
        )
    }
}
/*
const AddExpenseComponent = (props) => (
    <div>
        <h1> Add expense</h1>
        <ExpenseForm expense={props.expense} onSubmit={(expense) => {
            //props.dispatch(addExpense(expense));
            props.onSubmit(expense)
            props.history.push('/');
        }} />
    </div>
);
*/
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))    
});


export default connect(undefined, mapDispatchToProps)(AddExpenseComponent);