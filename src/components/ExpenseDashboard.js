import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

const ExpenseDashboardComponent = () => (
    <div>
        This is dashboard component
        <ExpensesListFilters />
        <ExpensesList />
        
    </div>
);


export default ExpenseDashboardComponent;