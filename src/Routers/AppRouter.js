import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import AddExpenseComponent from '../components/AddExpense'
import EditExpenseComponent from '../components/EditExpense'
import ExpenseDashboardComponent from '../components/ExpenseDashboard'
import Header from '../components/Header'
import HelpPageComponent from '../components/Help'
import NotFoundComponent from '../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardComponent} exact={true} />
                <Route path="/create" component={AddExpenseComponent} />
                <Route path="/edit/:id" component={EditExpenseComponent} />            
                <Route path="/help" component={HelpPageComponent} />
                <Route component={NotFoundComponent} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
