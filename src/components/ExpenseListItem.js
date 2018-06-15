import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListComponent = ({description , amount, createdAt, id}) => (
    <div> 
        <Link to={`/edit/${id}`}>
            <h3> Description: {description} </h3>

        </Link>
        <p>  Amount: {amount} - createdAt: {createdAt} </p>
        
    </div>
);

export default ExpenseListComponent;